const { client } = require('../../configuration/bot');

module.exports = async (guildScheduledEvent, action) => {
  try {
    const userId = guildScheduledEvent?.user?.id;
    console.log(`Guild Scheduled Event Members ${action} for guild ID: ${userId}`);
  } catch(e) {
    console.error(`Guild scheduled event members error: ${e}`);
  }
};