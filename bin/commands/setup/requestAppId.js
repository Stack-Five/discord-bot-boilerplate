const inquirer = require('inquirer');
const chalk = require('chalk');

module.exports = async () => {
  const answer = await inquirer
    .prompt([
      {
        type: 'input',
        name: 'appId',
        message: `What is your application ID?\n${chalk.blue('This is found on the "General Information" tab in the Discord Developer Portal.')}\n`,
      },
    ]);

    const { appId } = answer;

    console.clear();
    return appId;
};