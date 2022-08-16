const { client } = require('../../configuration/bot');

module.exports = async (event, action) => {
  try {
    const threadId = event?.id;
    console.log(`Thread ${action} event for thread ID: ${threadId}`);
  } catch(e) {
    console.error(`Thread event error: ${e}`);
  }
};