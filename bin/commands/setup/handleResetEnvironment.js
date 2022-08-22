const inquirer = require('inquirer');
const chalk = require('chalk');

module.exports = async () => {
  const answer = await inquirer
    .prompt([
      {
        type: 'list',
        name: 'proceed',
        message: `It looks like you already have your environment set up. Are you sure you want to continue?\n${chalk.red('This will overwrite your project\'s current environment variables!')}`,
        choices: [
          {
            name: 'Continue',
            value: true
          },
          {
            name: 'Cancel',
            value: false
          },
        ],
      },
    ]);

  const { proceed } = answer;
  
  console.clear();

  return proceed;
}