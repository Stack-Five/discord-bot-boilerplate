const { client } = require('../../configuration/bot');

// Sample: If user sends 'ping' in a channel, the bot will respond with 'Pong'
module.exports = async (message, action) => {
  try {
    if (message.author.bot) return;

    if (message.content.toUpperCase() === 'PING') {
      const channel = await client.channels.fetch(message.channel.id);

      channel.send({
        content: 'Pong'
      });
    }

  } catch(e) {
    console.error(`Ping pong error: ${e}`);
  }
};