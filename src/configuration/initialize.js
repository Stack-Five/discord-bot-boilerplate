const Bot = require('./bot');
const deployCommands = require('./deployCommands');
const mountListeners = require('./mountListeners');

module.exports = async () => {
  while (!Bot.initialized) {
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  await deployCommands(Bot.client);

  mountListeners();
}