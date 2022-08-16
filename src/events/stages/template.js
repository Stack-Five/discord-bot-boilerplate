const { client } = require('../../configuration/bot');

module.exports = async (event, action) => {
  try {
    const stageId = event?.id;
    console.log(`Stage ${action} event for stage ID: ${stageId}`);
  } catch(e) {
    console.error(`Stage event error: ${e}`);
  }
};