const inquirer = require('inquirer');
const chalk = require('chalk');
const open = require('open');

module.exports = async (DISCORD_APP_ID) => {
  const APP_ID = DISCORD_APP_ID || process.env.DISCORD_APP_ID;

  if (!APP_ID) {
    return console.log(chalk.red('No app ID was found in your .env file. Please run the set up wizard again.'));
  }

  console.clear();

  const answer = await inquirer
    .prompt([
      {
        type: 'list',
        name: 'proceed',
        message: `Would you like to install your bot on your Discord server now?\n${chalk.blue('Note: This will open an authentication screen on your browser. Please follow the prompts to install your bot on the server of your choice.')}`,
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

  const { proceed } = answer;

  if (proceed) {
    open(`https://discord.com/api/oauth2/authorize?client_id=${APP_ID}&permissions=8&scope=bot%20applications.commands`);
  }

  console.clear();
  return proceed;
}