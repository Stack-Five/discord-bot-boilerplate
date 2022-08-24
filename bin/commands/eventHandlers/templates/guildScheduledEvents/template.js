const { client } = require('../../configuration/bot');

module.exports = async (guildScheduledEvent, action) => {
  try {
    const eventId = guildScheduledEvent?.id;
    console.log(`Guild Scheduled Event ${action} for guild ID: ${eventId}`);
  } catch(e) {
    console.error(`Guild scheduled event error: ${e}`);
  }
};