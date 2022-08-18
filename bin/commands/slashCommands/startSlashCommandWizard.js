const chalk = require('chalk');

const askName = require('./askName');
const askDescription = require('./askDescription');
const optionsWizard = require('./optionsWizard');
const constructJSFile = require('./constructJSFile');

module.exports = async () => {
  const nameConfig = await askName();
  const description = await askDescription();

  const options = await optionsWizard();

  const file = await constructJSFile({
    commandName: nameConfig.command,
    fileName: nameConfig.file,
    description,
    options,
  });

  console.log(JSON.stringify(file));
  console.log(chalk.green('✅ Congratulations! Your slash command has been created and will be deployed the next time you run your bot.\n'));
}