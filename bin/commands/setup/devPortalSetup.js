const inquirer = require('inquirer');
const chalk = require('chalk');
const open = require('open');

module.exports = async () => {
  const answer = await inquirer
    .prompt([
      {
        type: 'list',
        name: 'confirmed',
        message: `Would you like to set up your application now in the developer portal?\n${chalk.blue('The developer portal will be opened in your browser.')}`,
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

  const { confirmed } = answer;
  if (confirmed) {
    open('https://discord.com/developers/applications');
  }

  console.clear();
  console.log(chalk.yellow('** After you log in to the Developer Portal, please click on "New Application", give your app a name, and click "Create".\n'))
  return confirmed;
};