const { client } = require('../../configuration/bot');

module.exports = async (guildBan, action) => {
  try {
    const userId = guildBan?.user?.id;
    console.log(`${action} event for user ID: ${userId}`);
  } catch(e) {
    console.error(`Ban event error: ${e}`);
  }
};