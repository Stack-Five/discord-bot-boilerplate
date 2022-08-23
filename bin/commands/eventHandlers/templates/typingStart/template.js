const { client } = require('../../configuration/bot');

module.exports = async (event) => {
  try {
    const userId = event?.user?.id;
    console.log(`Typing start event for user ID: ${userId}`);
  } catch(e) {
    console.error(`Typing start event error: ${e}`);
  }
};