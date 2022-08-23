#!/usr/bin/env node

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const cli = require('commander');
const welcomeScreen = require('./commands/welcomeScreen');

cli.description('Manage your Discord Bot Boilerplate using the CLI tool!');
cli.name('Discord Bot Boilerplate CLI');
cli.usage('<command>');
cli.addHelpCommand(false);
cli.helpOption(false);

cli
  .command('setup')
  .description( 'Set up your environment and install your bot to your development Discord server')
  .action(welcomeScreen);

cli.action(welcomeScreen);

cli.parse(process.argv);