const { client } = require('./discordBot');
const messageListeners = require('../messageListeners');

module.exports = () => {
  client.on('messageCreate', async (message) => {
    messageListeners.forEach(listener => listener(message));
  });

  client.on('interactionCreate', async (interaction) => {
    // Remove this if you want to monitor interactions other than commands
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      await interaction.reply({
        content: 'There was an error while executing this command!',
        ephemeral: true,
      });
    }
  });
}