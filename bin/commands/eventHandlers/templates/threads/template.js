const { client } = require('../../configuration/bot');

module.exports = async (threadChannel, action) => {
  try {
    const threadId = threadChannel?.id;
    console.log(`Thread ${action} event for thread ID: ${threadId}`);
  } catch(e) {
    console.error(`Thread event error: ${e}`);
  }
};