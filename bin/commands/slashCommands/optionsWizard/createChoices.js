const inquirer = require('inquirer');
const chalk = require('chalk');

module.exports = async () => {
  const answer = await inquirer
    .prompt([
      {
        type: 'input',
        name: 'choices',
        message: `Please comma separate your choices.\n${chalk.blue('Example: Apple, Banana, Coconut, Passion Fruit')}`,
      },
    ]);

  let { choices } = answer;

  console.clear();
  return choices.split(',');
};