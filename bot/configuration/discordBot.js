const Discord = require('discord.js');
const { GatewayIntentBits, Collection } = require('discord.js');

const deployCommands = require('./deployCommands');

const intents = [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.GuildMessageReactions,
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
