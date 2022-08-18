const inquirer = require('inquirer');
const open = require('open');
const exec = require('child_process').exec;

const startSetupWizard = require('../setup/startSetupWizard');
const handleResetEnvironment = require('../setup/handleResetEnvironment');
const installBot = require('../setup/installBot');
const startSlashCommandWizard = require('../slashCommands/startSlashCommandWizard');

const {
  DISCORD_BOT_TOKEN,
  DISCORD_APP_ID,
  DISCORD_GUILD_ID,
  DISCORD_API_VERSION
} = process.env;

module.exports = welcomeScreen = async () => {
  console.clear();

  const answer = await inquirer
    .prompt([
      {
        type: 'list',
        name: 'choice',
        loop: false,
        pageSize: 8,
        message: 'What do you want to do?\n',
        choices: [
          {
            name: '🛠  Set up your bot',
            value: 'setup'
          },
          ...(!!DISCORD_APP_ID ? [{
            name: '🤖 Install the bot on your Discord server',
            value: 'install'
          }] : []),
          {
            name: '💻 Run the bot in dev mode',
            value: 'runDev'
          },
          new inquirer.Separator(),
          {
            name: '👂 Create an event handler (example: handle message events)',
            value: 'generateEvent'
          },
          {
            name: '∕ Create a slash command (example: /hello-world)',
            value: 'generateSlashCommand'
          },
          new inquirer.Separator(),
          {
            name: '❓ Get help from Stack Five',
            value: 'help',
          }
        ],
      },
    ]);

  switch (answer?.choice) {
    case 'setup':
      console.clear();

      if (!!DISCORD_BOT_TOKEN || !!DISCORD_APP_ID || !!DISCORD_GUILD_ID || !!DISCORD_API_VERSION) {
        await handleResetEnvironment();
      }

      await startSetupWizard();
      welcomeScreen();
      break;
    case 'install':
      await installBot();
      welcomeScreen();
      break;
    case 'generateEvent':
      welcomeScreen();
      break;
    case 'generateSlashCommand':
      console.clear()
      await startSlashCommandWizard();
      welcomeScreen();
      break;
    case 'runDev':
      console.clear();
      const t = require('../../../')
      exec('yarn dev',
        (error, stdout, stderr) => {
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
      });
      break;
    case 'help':
      open('https://stackfive.io');
      break;
  }
};