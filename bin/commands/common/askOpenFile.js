const inquirer = require('inquirer');
const launch = require('launch-editor');

module.exports = async (path) => {
  const answer = await inquirer
  .prompt([
    {
      type: 'confirm',
      name: 'openFile',
      message: `What would you like to open your file now?\n`,
    },
  ]);
  
  let { openFile } = answer;

  if (openFile) {
    launch(`${path}:0:0`);
  }
  
  // console.clear();
  return { openFile };
};