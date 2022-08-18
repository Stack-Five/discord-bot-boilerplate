const inquirer = require('inquirer');
const chalk = require('chalk');
const { camelize } = require('../../../utils');

module.exports = async () => {
  const answer = await inquirer
    .prompt([
      {
        type: 'input',
        name: 'optionName',
        message: `What would you like this option to be called?\n${chalk.blue('Note: NOTE: Your option can only contain lower case characters and dashes (Example: favourite-fruit)')}\n`,
      },
    ]);

  let { optionName } = answer;
  
  optionName = optionName.replace(' ', '-').replace('/','').toLowerCase();

  console.clear();
  return optionName;
};