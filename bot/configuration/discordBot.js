const Discord = require('discord.js');
const { Intents, Collection } = require('discord.js');

const deployCommands   = require('./deployCommands');

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
    this.client = new Discord.Client({
      intents,
      partials,
    });

    this.client.commands = new Collection();

    await this.client.login(process.env.DISCORD_BOT_TOKEN);
    await deployCommands(this.client);
    this.initialized = true;

    return this;
  }
}

const DiscordBot = global.DiscordBot || new Bot();

if (!global.DiscordBot) {
  DiscordBot.initialize();
  global.DiscordBot = DiscordBot;
}

module.exports = DiscordBot;
