const { client } = require('../../configuration/bot');

module.exports = async (event, action) => {
  try {
    const emojiName = event?.name;
    console.log(`Emoji :${emojiName}:, ${action}`);
  } catch(e) {
    console.error(`Emoji event error: ${e}`);
  }
};