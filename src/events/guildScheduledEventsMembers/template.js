const { client } = require('../../configuration/bot');

module.exports = async (event, action) => {
  try {
    const userId = event?.user?.id;
    console.log(`Guild Scheduled Event Members ${action} for guild ID: ${userId}`);
  } catch(e) {
    console.error(`Guild scheduled event members error: ${e}`);
  }
};