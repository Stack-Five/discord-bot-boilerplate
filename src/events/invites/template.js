const { client } = require('../../configuration/bot');

module.exports = async (event, action) => {
  try {
    const guildId = event?.guild?.id;
    console.log(`Invite Event ${action} for Guild ID: ${guildId}`);
  } catch(e) {
    console.error(`Invite event error: ${e}`);
  }
};