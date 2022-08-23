const inquirer = require('inquirer');
const chalk = require('chalk');

module.exports = async (optionNumber = 0) => {
  const answer = await inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'wantsOption',
        message: `Would you like to add ${optionNumber > 0 ? 'another' : 'an'} option to your command?\n${chalk.blue('An option is asking the user for an argument, such as a string input, selecting a channel from a list, etc.')}\n`,
      },
    ]);

  let { wantsOption } = answer;

  console.clear();
  return wantsOption;
};