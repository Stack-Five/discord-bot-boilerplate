const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

module.exports = async (keys) => {
  const formattedEnvVariables = Object.entries(keys).reduce((string, entry) => {
    return string += `${entry[0]}=${entry[1]}\n`;
  }, '');

  fs.writeFileSync(
    path.join(__dirname, '../../../.env'),
    formattedEnvVariables
  );

  console.log(chalk.green('✅ Your .env file has been created!\n'));
};