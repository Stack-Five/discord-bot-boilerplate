const { client } = require('../../configuration/bot');

module.exports = async (messageReaction, action) => {
  try {
    const messageId = messageReaction?.message?.id;
    console.log(`Message reaction ${action} for message ID: ${messageId}`);
  } catch(e) {
    console.error(`Message reaction event error: ${e}`);
  }
};