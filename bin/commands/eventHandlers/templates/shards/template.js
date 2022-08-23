const { client } = require('../../configuration/bot');

module.exports = async (
  {
    shardId,
    unavailableGuilds,
    event,
    error,
    replayedEvents
  },
action) => {
  try {
    console.log(`Shard ${action} event for role ID: ${shardId}`);
  } catch(e) {
    console.error(`Shard event error: ${e}`);
  }
};