const inquirer = require('inquirer');

module.exports = async () => {
  const answer = await inquirer
    .prompt([
      {
        type: 'list',
        name: 'choice',
        message: 'Have you already set up your application in the Discord Developer Portal?',
        choices: [
          {
            name: 'Yes',
            value: true
          },
          {
            name: 'No',
            value: false
          },
        ],
      },
    ]);

  const { choice } = answer;

  console.clear();
  return choice;
};