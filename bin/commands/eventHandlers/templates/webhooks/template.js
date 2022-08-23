const { client } = require('../../configuration/bot');

module.exports = async (channel) => {
  try {
    const channelId = channel?.id;
    console.log(`Webhook update event for Channel ID: ${channelId}`);
  } catch(e) {
    console.error(`Webhook update event error: ${e}`);
  }
};