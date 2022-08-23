const inquirer = require('inquirer');
const chalk = require('chalk');
const optionChoices = require('./optionChoices');

module.exports = async () => {
  const answer = await inquirer
    .prompt([
      {
        type: 'list',
        name: 'optionType',
        message: `What type of option would you like to add?\n`,
        choices: optionChoices
      },
    ]);

  let { optionType } = answer;

  console.clear();
  return optionType;
};