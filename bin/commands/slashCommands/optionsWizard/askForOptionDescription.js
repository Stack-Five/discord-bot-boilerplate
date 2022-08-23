const inquirer = require('inquirer');
const chalk = require('chalk');

module.exports = async () => {
  const answer = await inquirer
    .prompt([
      {
        type: 'input',
        name: 'optionDescription',
        message: `What will this option do?\n${chalk.blue('NOTE: This description is visible to users and should be informative')}\n`,
      },
    ]);

  let { optionDescription } = answer;
  
  optionDescription = optionDescription;

  console.clear();
  return optionDescription;
};