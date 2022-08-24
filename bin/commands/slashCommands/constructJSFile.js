const fs = require('fs');
const path = require('path');
const { camelize } = require("../../utils");
const beautify = require('js-beautify').js;

const formatCommands = (options) => {
  return options.reduce((args, command, index) => {
    let argument = `.${command.djsOptionName}(option => option.setName('${command.name}').setDescription('${command.description}')`
    let formattedChoices = command?.choices?.reduce((choiceString, choice) => {
  
      return choiceString += `{'name': '${choice}', 'value': '${camelize(choice)}'},`;
    }, '');
  
    if (command.required) argument += '.setRequired(true)';
    if (command.choices) argument += `.addChoices(${formattedChoices})`;
    
    argument += ')';

    if (index !== options.length - 1) argument += '\n';
  
    return args += argument;
  }, '');
};

module.exports = (configuration) => {
  let codeOutput = `
    const { client } = require('../configuration/bot');

    const { SlashCommandBuilder } = require('@discordjs/builders');

    module.exports = {
      data: new SlashCommandBuilder()
        .setName('${configuration.commandName}')
        .setDescription(
          '${configuration.description}'
        )
        ${formatCommands(configuration.options)},

      async execute(interaction) {
        try {
          await interaction.reply('Success!');
        } catch (e) {
          console.log(\`There was an error with the ${configuration.name} command: \$\{e\}\`);
        }
      },
    };
  `;

  const beautifiedCode = beautify(codeOutput, { indent_size: 2, space_in_empty_paren: true });
  const filePath = path.join(__dirname, `../../../src/slashCommands/${configuration.fileName}.js`);

  fs.writeFileSync(filePath, beautifiedCode);

  return { path: filePath }
}
