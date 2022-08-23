const { client } = require('../../configuration/bot');

module.exports = async (oldState, newState) => {
  try {
    const userId = newState?.member?.id;
    console.log(`Voice state event for User ID: ${userId}`);
  } catch(e) {
    console.error(`Voice state event error: ${e}`);
  }
};