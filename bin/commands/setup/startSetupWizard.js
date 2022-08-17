const chalk = require('chalk');
const installBot = require('./installBot');
const askIfAppSetUp = require('./askIfAppSetUp');
const devPortalSetup = require('./devPortalSetup');
const askForKeys = require('./askForKeys');
const saveKeys = require('./saveKeys');

module.exports = async () => {
  const hasSetupApp = await askIfAppSetUp();

  if (!hasSetupApp) await devPortalSetup();
  
  const keys = await askForKeys();
  await saveKeys(keys);

  await installBot(keys.DISCORD_APP_ID);

  console.log(chalk.green('✅ Congratulations! Your bot has been set up successfully. You can now run your bot with the "yarn dev" command, or use one of the other CLI tools below.\n'));
}