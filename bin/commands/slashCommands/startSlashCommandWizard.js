const chalk = require('chalk');

const askName = require('./askName');
const askDescription = require('./askDescription');
const optionsWizard = require('./optionsWizard');
const constructJSFile = require('./constructJSFile');
const askOpenFile = require('../common/askOpenFile');

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
  
  await askOpenFile(file.path);

  console.log(chalk.green(`✅ Congratulations! Your slash command has been created and will be deployed the next time you run your bot.\n   ${chalk.blue(`Your command was created at: ${file.path}`)}\n`));
}