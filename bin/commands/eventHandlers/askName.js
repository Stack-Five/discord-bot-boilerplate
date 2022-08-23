const inquirer = require('inquirer');
const chalk = require('chalk');
const { camelize } = require('../../utils');

module.exports = async () => {
  const answer = await inquirer
    .prompt([
      {
        type: 'input',
        name: 'fileName',
        message: `What would you like to name your event handler?\n${chalk.blue('NOTE: Your handler should be camelCased (example: myHandler)')}\n`,
      },
    ]);

  let { fileName } = answer;
  fileName = fileName.replace(' ', '-').replace('/','');
  fileName = camelize(fileName.replace('-', ' '));

  console.clear();
  return fileName;
};