const { client } = require('../../configuration/bot');

module.exports = async (event, action) => {
  try {
    const userId = event?.user?.id;
    console.log(`${action} event for user ID: ${userId}`);
  } catch(e) {
    console.error(`Ban event error: ${e}`);
  }
};