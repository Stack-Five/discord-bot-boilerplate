const { client } = require('../configuration/discordBot');

module.exports = async (message) => {
  try {
    if (message.author.bot) return;
    console.log('== incoming message');
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