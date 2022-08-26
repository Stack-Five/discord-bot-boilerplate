require('dotenv').config();
const fs = require('fs');
const path = require('path');
const chai = require('chai');
const chaiFiles = require('chai-files');

chai.use(chaiFiles);

const packageJson = require('../../package.json');
const {
  run,
  DOWN,
  ENTER,
  EXIT
} = require('../mockInquirer');

const { expect } = chai;
const { file } = chaiFiles;

const runCLI = (args) => run('npx discord-bot', args);

const MOCK_EVENT_PATH = path.join(__dirname, '../../src/events/messages/mochaTestEventHandler.js');
const MOCK_SLASH_COMMAND_PATH = path.join(__dirname, '../../src/slashCommands/mochaTestCommand.js');

describe('Slash Commands', function() {
  it('Runs', async () => {
    const { lastOutput } = await runCLI([
      DOWN,
      DOWN,
      DOWN,
      DOWN,
      DOWN,
      DOWN,
      // Select "Check Version"
      ENTER
    ]);
    
    return expect(lastOutput).to.equal(`${packageJson.version}\n`);
  });

  it ('Can create an event handler', async() => {
    await runCLI([
      // Select "Create an event handler"
      DOWN,
      DOWN,
      DOWN,
      ENTER,
      // Select "Messages" event type
      ENTER,
      // Name the command
      'mochaTestEventHandler',
      ENTER,
      // Do not open file
      'n',
      ENTER,
      // End process
      EXIT
    ]);

    return expect(file(MOCK_EVENT_PATH)).to.exist;
  });

  it ('Can create a slash command with options', async() => {
    await runCLI([
      // Select "Create an event handler"
      DOWN,
      DOWN,
      DOWN,
      DOWN,
      ENTER,
      // Name the command
      'mocha-test-command',
      ENTER,
      // Describe the command
      'My test command',
      ENTER,
      // Add an option
      'y',
      // Select string
      ENTER,
      // Name the option
      'option-one',
      ENTER,
      // Describe the option
      'A test option',
      ENTER,
      // Is required
      'y',
      ENTER,
      // Add predefined choices
      'y',
      ENTER,
      // Add choices
      'Apple, Banana, Coconut, Passion Fruit',
      ENTER,
      // No more options
      'n',
      ENTER,
      // Do not open file
      'n',
      ENTER,
      // End process
      EXIT
    ]);

    return expect(file(MOCK_SLASH_COMMAND_PATH)).to.exist;
  });

    after(() => {
      fs.unlinkSync(MOCK_EVENT_PATH);
      fs.unlinkSync(MOCK_SLASH_COMMAND_PATH);
    });
});