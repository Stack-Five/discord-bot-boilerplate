const { client } = require('../../configuration/bot');

module.exports = async (stageInstance, action) => {
  try {
    const stageId = stageInstance?.id;
    console.log(`Stage ${action} event for stage ID: ${stageId}`);
  } catch(e) {
    console.error(`Stage event error: ${e}`);
  }
};