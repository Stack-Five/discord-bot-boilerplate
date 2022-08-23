const inquirer = require('inquirer');
const chalk = require('chalk');
const { camelize } = require('../../utils');

module.exports = async () => {
  const answer = await inquirer
    .prompt([
      {
        type: 'input',
        name: 'commandName',
        message: `What would you like to name your command?\n${chalk.blue('NOTE: Your command can only contain lower case characters and dashes (example: my-command)')}\n`,
      },
    ]);

  let { commandName } = answer;
  commandName = commandName.replace(' ', '-').replace('/','').toLowerCase();
  const fileName = camelize(commandName.replace('-', ' '));

  console.clear();
  return { command: commandName, file: fileName };
};