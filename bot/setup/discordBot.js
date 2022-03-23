const Discord = require('discord.js');
const { Intents, Collection } = require('discord.js');

const deployCommands = require('./deployCommands');

const intents = [
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_MESSAGES,
  Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
];

const partials = ['MESSAGE', 'CHANNEL', 'REACTION'];

class Bot {
  constructor() {
    this.initialized = false;
    this.client = {};
  }

  async initialize() {
    if (this.initialized) return;

    this.client = new Discord.Client({
      intents,
      partials,
    });

    this.client.commands = new Collection();

    await this.client.login(process.env.DISCORD_BOT_TOKEN);
    await deployCommands(this.client);

    this.listen();
    this.initialized = true;
  }

  async listen() {
    console.log('Discord Bot is waiting for interactions...');

    this.client.on('interactionCreate', async (interaction) => {
      // Remove this if you want to monitor interactions other than commands
      if (!interaction.isCommand()) return;

      const command = this.client.commands.get(interaction.commandName);

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
}

const DiscordBot = global.DiscordBot || new Bot();

if (!global.DiscordBot) DiscordBot.initialize();

if (process.env.NODE_ENV !== 'production') global.DiscordBot = DiscordBot;

module.exports = DiscordBot;
