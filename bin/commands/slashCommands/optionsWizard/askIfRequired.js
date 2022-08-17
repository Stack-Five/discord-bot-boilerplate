const inquirer = require('inquirer');
const chalk = require('chalk');
const { camelize } = require('../../../utils');

module.exports = async () => {
  const answer = await inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'isRequired',
        message: `Is this option required?`,
      },
    ]);

  let { isRequired } = answer;

  console.clear();
  return isRequired;
};