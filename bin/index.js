#!/usr/bin/env node

require('dotenv').config();
const cli = require('commander');

const { initial } = require('./commands/setup');

cli.description("Manage your Discord Bot Boilerplate using the CLI tool!");
cli.name("Discord Bot Boilerplate CLI");
cli.usage("<command>");
cli.addHelpCommand(false);
cli.helpOption(false);

cli
  .command('setup')
  .description( 'Set up your environment and install your bot to your development Discord server')
  .action(initial);

cli.action(initial);

cli.parse(process.argv);