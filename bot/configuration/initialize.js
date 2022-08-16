const DiscordBot = require('./discordBot');
const mountListeners = require('./mountListeners');

module.exports = async () => {
  while (!DiscordBot.initialized) {
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  mountListeners();
}