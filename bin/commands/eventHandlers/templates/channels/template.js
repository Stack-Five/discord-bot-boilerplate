const { ChannelType } = require('discord.js');
const { client } = require('../../configuration/bot');

module.exports = async (guildChannel, action) => {
  try {
    const channelType = ChannelType[guildChannel.type];

    switch(channelType) {
      case 'GUILD_TEXT':
        console.log('New text channel event.');
        break;
      case 'GUILD_VOICE':
        console.log('New voice channel event.');
        break;
      case 'GUILD_CATEGORY':
        console.log('New organizational category event.');
        break;
      case 'GUILD_NEWS':
        console.log('New news channel event.');
        break;
      case 'GUILD_NEWS_THREAD':
        console.log('New news channel thread event.');
        break;
      case 'GUILD_PUBLIC_THREAD':
        console.log('New text channel thread event.');
        break;
      case 'GUILD_PRIVATE_THREAD':
        console.log('New text channel private thread event.');
        break;
      case 'GUILD_STAGE_VOICE':
        console.log('New stage channel event.');
        break;
      case 'GUILD_DIRECTORY':
        console.log('New guild directory event.');
        break;
      case 'GUILD_FORUM':
        console.log('New guild forum event.');
        break;
      default:
        console.log(`Unknown channel event for type: ${channelType}`);
    }
  } catch(e) {
    console.error(`Channel event error: ${e}`);
  }
};