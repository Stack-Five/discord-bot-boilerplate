const { client } = require('../../configuration/bot');

module.exports = async (event, action) => {
  try {
    const eventId = event?.id;
    console.log(`Guild Scheduled Event ${action} for guild ID: ${eventId}`);
  } catch(e) {
    console.error(`Guild scheduled event error: ${e}`);
  }
};