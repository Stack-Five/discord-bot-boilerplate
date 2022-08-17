const inquirer = require('inquirer');
const chalk = require('chalk');
const { camelize } = require('../../../utils');

module.exports = async () => {
  const answer = await inquirer
    .prompt([
      {
        type: 'input',
        name: 'optionName',
        message: `What would you like this option to be called?\n${chalk.blue('Example: category')}\n`,
      },
    ]);

  let { optionName } = answer;
  
  optionName = camelize(optionName);

  console.clear();
  return optionName;
};