const askForChoices = require('./askForChoices');
const askForOption = require('./askForOption');
const askForOptionDescription = require('./askForOptionDescription');
const askForOptionName = require('./askForOptionName');
const askForOptionType = require('./askForOptionType');
const createChoices = require('./createChoices');
const optionChoices = require('./optionChoices');
const askIfRequired = require('./askIfRequired');

module.exports = async () => {
  let optionSetupInProgress = true;
  let optionIndex = 0;
  const options = [];

  while (optionSetupInProgress) {
    const wantsOption = await askForOption(optionIndex);

    if (wantsOption) {
      let choices;
      const typeOfOption = await askForOptionType();
      const optionConfig = optionChoices.find(option => option.value === typeOfOption);

      const optionName = await askForOptionName();
      const optionDescription = await askForOptionDescription();
      const isRequired = await askIfRequired();

      if (optionConfig.canHaveChoices) {
        const userWantsToDefineChoices = await askForChoices();

        if (userWantsToDefineChoices) {
          choices = await createChoices();
        }
      }

      options.push({
        name           : optionName,
        description    : optionDescription,
        required       : isRequired,
        type           : typeOfOption,
        djsOptionName  : optionConfig.djsOptionName,
        djsOptionGetter: optionConfig.djsOptionGetter,
        choices,
      });

      optionIndex++;
    } else {
      optionSetupInProgress = false;
    }
  }

  // Discord needs required fields first, otherwise deployment fails
  options.sort((a, b) => b.required - a.required);
  return options;
}