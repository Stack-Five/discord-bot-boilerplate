const { client } = require('../../configuration/bot');

module.exports = async (event, action) => {
  try {
    const guildId = event?.guild?.id;
    console.log(`Guild ${action} event for guild ID: ${guildId}`);
  } catch(e) {
    console.error(`Guild join / leave event error: ${e}`);
  }
};