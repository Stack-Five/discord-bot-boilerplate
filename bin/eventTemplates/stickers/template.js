const { client } = require('../../configuration/bot');

module.exports = async (event, action) => {
  try {
    const stickerId = event?.id;
    console.log(`Sticker ${action} event for sticker ID: ${stickerId}`);
  } catch(e) {
    console.error(`Sticker event error: ${e}`);
  }
};