const chalk = require('chalk');

const askName = require('./askName');
const askDescription = require('./askDescription');
const optionsWizard = require('./optionsWizard');

module.exports = async () => {
  const name = await askName();
  const description = await askDescription();

  const options = await optionsWizard();

  // TODO: Write JS file


  console.log(chalk.green('✅ Congratulations! Your slash command has been created and will be deployed the next time you run your bot.\n'));
}