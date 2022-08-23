const { client } = require('../../configuration/bot');

module.exports = async (role, action) => {
  try {
    const roleId = role?.id;
    console.log(`Role ${action} event for role ID: ${roleId}`);
  } catch(e) {
    console.error(`Role event error: ${e}`);
  }
};