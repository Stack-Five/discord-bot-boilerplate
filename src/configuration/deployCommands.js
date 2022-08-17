const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const {
  DISCORD_APP_ID,
  DISCORD_GUILD_ID,
  DISCORD_BOT_TOKEN,
  DISCORD_API_VERSION
} = process.env;

module.exports = async (client) => {
  const commandFiles = require('../slashCommands');
  const commands = [];

  for (const command of commandFiles) {
    commands.push(command.data.toJSON());
    client.commands.set(command.data.name, command);
  }

  const rest = new REST({ version: DISCORD_API_VERSION }).setToken(DISCORD_BOT_TOKEN);

  return rest
    .put(Routes.applicationGuildCommands(DISCORD_APP_ID, DISCORD_GUILD_ID), {
      body: commands,
    })
    .then(console.log('Successfully registered application commands, preparing bot...'))
    .catch(console.error);
};
