const { client } = require('../../configuration/bot');

module.exports = async (event, action) => {
  try {
    const shardId = event?.id;
    console.log(`Shard ${action} event for role ID: ${shardId}`);
  } catch(e) {
    console.error(`Shard event error: ${e}`);
  }
};