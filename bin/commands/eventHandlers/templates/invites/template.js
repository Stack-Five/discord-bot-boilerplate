const { client } = require('../../configuration/bot');

module.exports = async (invite, action) => {
  try {
    const guildId = invite?.guild?.id;
    console.log(`Invite Event ${action} for Guild ID: ${guildId}`);
  } catch(e) {
    console.error(`Invite event error: ${e}`);
  }
};