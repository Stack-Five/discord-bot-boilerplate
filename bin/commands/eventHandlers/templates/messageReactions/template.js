const { client } = require('../../configuration/bot');

module.exports = async (event, action) => {
  try {
    const messageId = event?.message?.id;
    console.log(`Message reaction ${action} for message ID: ${messageId}`);
  } catch(e) {
    console.error(`Message reaction event error: ${e}`);
  }
};