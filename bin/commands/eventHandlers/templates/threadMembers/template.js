const { client } = require('../../configuration/bot');

module.exports = async (event, action) => {
  try {
    const threadMemberId = event?.user?.id;
    console.log(`Thread member ${action} event for user ID: ${threadMemberId}`);
  } catch(e) {
    console.error(`Thread member event error: ${e}`);
  }
};