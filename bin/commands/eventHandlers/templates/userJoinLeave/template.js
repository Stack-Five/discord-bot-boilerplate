const { client } = require('../../configuration/bot');

module.exports = async (event, action) => {
  try {
    const userId = event?.user?.id;
    console.log(`Guild ${action} event for user ID: ${userId}`);
  } catch(e) {
    console.error(`User join / leave event error: ${e}`);
  }
};