const { client } = require('../../configuration/bot');

module.exports = async (event) => {
  try {
    const webhookId = event?.id;
    console.log(`Webhook update event for Webhook ID: ${webhookId}`);
  } catch(e) {
    console.error(`Webhook update event error: ${e}`);
  }
};