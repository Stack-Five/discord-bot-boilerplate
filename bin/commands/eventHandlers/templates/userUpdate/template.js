const { client } = require('../../configuration/bot');

module.exports = async (event, action) => {
  try {
    const userId = event?.user?.id;
    console.log(`User ${action} event for user ID: ${userId}`);
  } catch(e) {
    console.error(`User update event error: ${e}`);
  }
};