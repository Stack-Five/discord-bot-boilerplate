const inquirer = require('inquirer');
const chalk = require('chalk');

module.exports = async (optionNumber = 0) => {
  const answer = await inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'wantsChoices',
        message: `Would you like to add a list of predefined choices that your users have to pick from?\n${chalk.blue('Instead of letting your used type any input, you can provide them with a list of items to pick from.')}\n`,
      },
    ]);

  let { wantsChoices } = answer;

  console.clear();
  return wantsChoices;
};