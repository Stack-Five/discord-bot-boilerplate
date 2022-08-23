
const requestAppID = require('./requestAppID');
const requestBotToken = require('./requestBotToken');
const requestGuildId = require('./requestGuildId');

module.exports = async () => {
  const keys = {
    DISCORD_API_VERSION: process.env.DISCORD_API_VERSION || '10',
    DISCORD_APP_ID     : await requestAppID(),
    DISCORD_BOT_TOKEN  : await requestBotToken(),
    DISCORD_GUILD_ID   : await requestGuildId(),
  };

  return keys;
};