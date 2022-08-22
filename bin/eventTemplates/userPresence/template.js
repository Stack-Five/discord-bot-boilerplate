const { client } = require('../../configuration/bot');

module.exports = async (event, action) => {
  try {
    const userId = event?.user?.id;
    console.log(`User presence update for user ID: ${userId}`);
  } catch(e) {
    console.error(`User presence event error: ${e}`);
  }
};