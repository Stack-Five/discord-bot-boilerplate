const inquirer = require('inquirer');
const chalk = require('chalk');

module.exports = async () => {
  const answer = await inquirer
    .prompt([
      {
        type: 'input',
        name: 'botToken',
        message: `What is your bot token?\n${chalk.blue('This is found on the "Bot" tab in the Discord Developer Portal.')}\n${chalk.yellow('Note: if this is a new application you just created, you will have to click the "Add Bot" button, and then the "Reset Token" button to get your token.')}\n`,
      },
    ]);

  const { botToken } = answer;

  console.clear();
  return botToken;
};