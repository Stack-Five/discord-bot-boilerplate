const chalk = require('chalk');

const askType = require('./askType');
const askName = require('./askName');
const saveFile = require('./saveFile');
const askOpenFile = require('../common/askOpenFile');

module.exports = async () => {
  console.clear();

  const handlerType = await askType();
  const fileName = await askName();
  const savedFile = await saveFile(handlerType, fileName);
  await askOpenFile(savedFile.relativePath);

  console.log(chalk.green(`✅ Congratulations! Your event handler has been created and will be deployed the next time you run your bot.\n   ${chalk.blue(`Your command was created at: ${savedFile.path}`)}\n`));
}