const { client } = require('../../configuration/bot');

module.exports = async (event) => {
  try {
    console.log(`Bot ready event ID ${event?.readyAt}`);
  } catch(e) {
    console.error(`Bot read event error: ${e}`);
  }
};