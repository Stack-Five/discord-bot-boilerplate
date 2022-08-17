const inquirer = require('inquirer');
const chalk = require('chalk');
const { camelize } = require('../../utils');

module.exports = async () => {
  const answer = await inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: `What would you like to name your command?\n${chalk.blue('NOTE: Your command must be camelcased (example: myCommand)')}\n`,
      },
    ]);

  let { name } = answer;
  name = camelize(name);

  console.clear();
  return name;
};