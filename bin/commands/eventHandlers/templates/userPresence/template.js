const { client } = require('../../configuration/bot');

module.exports = async (presence) => {
  try {
    const userId = presence?.user?.id;
    console.log(`User presence update for user ID: ${userId}`);
  } catch(e) {
    console.error(`User presence event error: ${e}`);
  }
};