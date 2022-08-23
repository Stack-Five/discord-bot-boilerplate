const { client } = require('../../configuration/bot');

module.exports = async (event, action) => {
  try {
    const roleId = event?.id;
    console.log(`Role ${action} event for role ID: ${roleId}`);
  } catch(e) {
    console.error(`Role event error: ${e}`);
  }
};