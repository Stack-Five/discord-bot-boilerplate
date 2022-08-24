const { client } = require('../../configuration/bot');

module.exports = async (sticker, action) => {
  try {
    const stickerId = sticker?.id;
    console.log(`Sticker ${action} event for sticker ID: ${stickerId}`);
  } catch(e) {
    console.error(`Sticker event error: ${e}`);
  }
};