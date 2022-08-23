const { client } = require('../../configuration/bot');

module.exports = async (event) => {
  try {
    const userId = event?.user?.id;
    console.log(`Voice state event for User ID: ${userId}`);
  } catch(e) {
    console.error(`Voice state event error: ${e}`);
  }
};