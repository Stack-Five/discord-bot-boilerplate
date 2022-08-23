const { client } = require('../../configuration/bot');

module.exports = async (guildMember, action) => {
  try {
    const userId = guildMember?.user?.id;
    console.log(`Guild ${action} event for user ID: ${userId}`);
  } catch(e) {
    console.error(`User join / leave event error: ${e}`);
  }
};