const Discord = require('discord.js');
const {
  GatewayIntentBits,
  Collection,
  Partials,
} = require('discord.js');

const intents = [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildBans,
  GatewayIntentBits.GuildEmojisAndStickers,
  GatewayIntentBits.GuildIntegrations,
  GatewayIntentBits.GuildWebhooks,
  GatewayIntentBits.GuildInvites,
  GatewayIntentBits.GuildVoiceStates,
  GatewayIntentBits.GuildPresences,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.GuildMessageReactions,
  GatewayIntentBits.GuildMessageTyping,
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.DirectMessageReactions,
  GatewayIntentBits.DirectMessageTyping,
  GatewayIntentBits.MessageContent,
  GatewayIntentBits.GuildScheduledEvents,
];

const partials = [
  Partials.User,
  Partials.Channel,
  Partials.GuildMember,
  Partials.Message,
  Partials.Reaction,
  Partials.GuildScheduledEvent,
  Partials.ThreadMember,
];

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
