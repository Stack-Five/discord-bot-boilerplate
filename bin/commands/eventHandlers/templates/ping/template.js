const { client } = require('../../configuration/bot');

module.exports = async (event) => {
  try {
    console.log(`Ping event received`);
  } catch(e) {
    console.error(`Ping event error: ${e}`);
  }
};