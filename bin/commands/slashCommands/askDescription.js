const inquirer = require('inquirer');
const chalk = require('chalk');

module.exports = async () => {
  const answer = await inquirer
    .prompt([
      {
        type: 'input',
        name: 'description',
        message: `What will your command do?\n${chalk.blue('NOTE: This description is visible to users and should be informative')}\n`,
      },
    ]);

  let { description } = answer;

  console.clear();
  return description;
};