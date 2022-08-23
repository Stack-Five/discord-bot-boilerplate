const { client } = require('../../configuration/bot');

module.exports = async (guildEmoji, action) => {
  try {
    const emojiName = guildEmoji?.name;
    console.log(`Emoji :${emojiName}:, ${action}`);
  } catch(e) {
    console.error(`Emoji event error: ${e}`);
  }
};