const { client } = require('../../configuration/bot');

module.exports = async (event, action) => {
  try {
    const guildId = event?.guild?.id;
    console.log(`Guild Update Event for Guild ID: ${guildId}`);
  } catch(e) {
    console.error(`Guild update event error: ${e}`);
  }
};