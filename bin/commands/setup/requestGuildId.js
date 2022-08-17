const inquirer = require('inquirer');
const chalk = require('chalk');

module.exports = async () => {
  const answer = await inquirer
    .prompt([
      {
        type: 'input',
        name: 'guildId',
        message: `What is the ID of the Discord server you want to add your bot to?\n${chalk.blue('This is found by right clicking your server icon in the Discord app, and clicking "Copy ID".\n')}${chalk.yellow('NOTE: To see this option, you MUST enable developer mode in Settings --> "Advanced" --> Developer Mode.')}\n`,
      },
    ]);

  const { guildId } = answer;

  console.clear();
  return guildId;
};