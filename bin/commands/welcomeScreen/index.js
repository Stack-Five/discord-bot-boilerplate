const inquirer = require('inquirer');
const open = require('open');
const exec = require('child_process').exec;

const startSetupWizard = require('../setup/startSetupWizard');
const handleResetEnvironment = require('../setup/handleResetEnvironment');
const installBot = require('../setup/installBot');
const startSlashCommandWizard = require('../slashCommands/startSlashCommandWizard');
const startEventHandlerWizard = require('../eventHandlers/startEventHandlerWizard');

const {
  DISCORD_BOT_TOKEN,
  DISCORD_APP_ID,
  DISCORD_GUILD_ID,
  DISCORD_API_VERSION
} = process.env;

let init = true;

const handleInit = () => {
  init = false;
  console.clear();
}

module.exports = welcomeScreen = async () => {
  if (init) handleInit();

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
            name: '👂 Create an event handler (example: listen for emoji reactions)',
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
        const userWantsReset = await handleResetEnvironment();
        if (!userWantsReset) return welcomeScreen();
      }

      await startSetupWizard();
      welcomeScreen();
      break;
    case 'install':
      await installBot();
      welcomeScreen();
      break;
    case 'generateEvent':
      await startEventHandlerWizard();
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

  init = false;
};