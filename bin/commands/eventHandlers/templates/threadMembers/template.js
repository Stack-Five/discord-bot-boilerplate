const { client } = require('../../configuration/bot');

module.exports = async (oldMembers, newMembers, action) => {
  try {
    if (Array.isArray(newMembers)) {
      const threadMemberIds = newMembers?.map(user => user?.id);
      console.log(`Thread member ${action} event for user IDs: ${threadMemberIds}`);

    } else {
      const threadMemberId = newMembers?.user?.id;
      console.log(`Thread member ${action} event for user ID: ${threadMemberId}`);
    }
  } catch(e) {
    console.error(`Thread member event error: ${e}`);
  }
};