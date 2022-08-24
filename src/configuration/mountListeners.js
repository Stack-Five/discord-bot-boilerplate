const { client } = require('./bot');
const { InteractionType } = require('discord.js');
const messageListeners = require('../events');

module.exports = () => {
  // **************************
  // ******** Messages ********
  // **************************
  client.on('messageCreate', async (message) => {
    messageListeners['messages']?.forEach(listener => listener(message, 'create'));
  });

  client.on('messageDelete', async (message) => {
    messageListeners['messages']?.forEach(listener => listener(message, 'delete'));
  });

  client.on('messageDeleteBulk', async (message) => {
    messageListeners['messages']?.forEach(listener => listener(message, 'deleteBulk'));
  });

  client.on('messageUpdate', async (message) => {
    messageListeners['messages']?.forEach(listener => listener(message, 'update'));
  });

  client.on('messageReactionAdd', async (message) => {
    messageListeners['messageReactions']?.forEach(listener => listener(message, 'add'));
  });

  client.on('messageReactionRemove', async (message) => {
    messageListeners['messageReactions']?.forEach(listener => listener(message, 'remove'));
  });

  client.on('messageReactionRemoveEmoji', async (message) => {
    messageListeners['messageReactions']?.forEach(listener => listener(message, 'remove'));
  });
  
  client.on('messageReactionRemoveAll', async (message) => {
    messageListeners['messageReactions']?.forEach(listener => listener(message, 'removeAll'));
  });

  // **************************
  // ********* Guilds *********
  // **************************
  client.on('guildCreate', async (message) => {
    messageListeners['guildJoinLeave']?.forEach(listener => listener(message, 'create'));
  });

  client.on('guildDelete', async (message) => {
    messageListeners['guildJoinLeave']?.forEach(listener => listener(message, 'delete'));
  });

  client.on('guildUpdate', async (message) => {
    messageListeners['guildUpdate']?.forEach(listener => listener(message));
  });

  client.on('guildScheduledEventCreate', async (message) => {
    messageListeners['guildScheduledEvent']?.forEach(listener => listener(message, 'create'));
  });

  client.on('guildScheduledEventDelete', async (message) => {
    messageListeners['guildScheduledEvent']?.forEach(listener => listener(message, 'delete'));
  });

  client.on('guildScheduledEventUpdate', async (message) => {
    messageListeners['guildScheduledEvent']?.forEach(listener => listener(message, 'update'));
  });

  client.on('guildScheduledEventUserAdd', async (message) => {
    messageListeners['guildScheduledEventsMembers']?.forEach(listener => listener(message, 'subscribe'));
  });

  client.on('guildScheduledEventUserRemove', async (message) => {
    messageListeners['guildScheduledEventsMembers']?.forEach(listener => listener(message, 'unsubscribe'));
  });
  

  // **************************
  // ******** Channels ********
  // **************************
  client.on('channelCreate', async (message) => {
    messageListeners['channels']?.forEach(listener => listener(message, 'create'));
  });

  client.on('channelDelete', async (message) => {
    messageListeners['channels']?.forEach(listener => listener(message, 'delete'));
  });

  client.on('channelUpdate', async (message) => {
    messageListeners['channels']?.forEach(listener => listener(message, 'update'));
  });

  // **************************
  // ****** Interactions ******
  // **************************
  client.on('interactionCreate', async (interaction) => {
    const interactionType = InteractionType[interaction.type];

    switch (interactionType) {
      case 'Ping':
        messageListeners['ping']?.forEach(listener => listener(interaction));
        break
      case 'ApplicationCommand':
        const command = client.commands.get(interaction.commandName);
        if (!command) return;

        try {
          await command.execute(interaction);
        } catch (error) {
          await interaction.reply({
            content: 'There was an error while executing this command!',
            ephemeral: true,
          });
        }

        break;
      case 'MessageComponent':
        console.log('Message component event received');
        break;
      case 'ApplicationCommandAutocomplete':
        console.log('Command autocomplete event received');
        break;
      case 'ModalSubmit':
        console.log('Modal submit even received');
        break;

      default:
        console.log(`Unknown interaction type: ${interactionType}`);
    }
  });

  // **************************
  // ********** User **********
  // **************************
  client.on('guildMemberAdd', async (message) => {
    messageListeners['userJoinLeave']?.forEach(listener => listener(message, 'join'));
  });

  client.on('guildMemberRemove', async (message) => {
    messageListeners['userJoinLeave']?.forEach(listener => listener(message, 'leave'));
  });

  client.on('guildMemberUpdate', async (message) => {
    messageListeners['userUpdate']?.forEach(listener => listener(message, 'update'));
  });

  client.on('userUpdate', async (message) => {
    messageListeners['userUpdate']?.forEach(listener => listener(message, 'update'));
  });

  client.on('presenceUpdate', async (message) => {
    messageListeners['userPresence']?.forEach(listener => listener(message));
  });

  client.on('typingStart', async (message) => {
    messageListeners['typingStart']?.forEach(listener => listener(message));
  });

  // **************************
  // ********* Bans ***********
  // **************************
  client.on('guilBanAdd', async (message) => {
    messageListeners['bans']?.forEach(listener => listener(message, 'add'));
  });

  client.on('guildBanRemove', async (message) => {
    messageListeners['bans']?.forEach(listener => listener(message, 'remove'));
  });

  // **************************
  // ******** Emojis **********
  // **************************
  client.on('emojiCreate', async (message) => {
    messageListeners['emojis']?.forEach(listener => listener(message, 'create'));
  });

  client.on('emojiDelete', async (message) => {
    messageListeners['emojis']?.forEach(listener => listener(message, 'delete'));
  });

  client.on('emojiUpdate', async (message) => {
    messageListeners['emojis']?.forEach(listener => listener(message, 'update'));
  });

  // **************************
  // ******** Invites *********
  // **************************
  client.on('inviteCreate', async (message) => {
    messageListeners['invites']?.forEach(listener => listener(message, 'create'));
  });

  client.on('inviteDelete', async (message) => {
    messageListeners['invites']?.forEach(listener => listener(message, 'delete'));
  });

  // **************************
  // ********** Bot ***********
  // **************************
  client.on('ready', async (message) => {
    messageListeners['botReady']?.forEach(listener => listener(message));
  });

  // **************************
  // ********* Roles **********
  // **************************
  client.on('roleCreate', async (message) => {
    messageListeners['roles']?.forEach(listener => listener(message, 'create'));
  }); 

  client.on('roleDelete', async (message) => {
    messageListeners['roles']?.forEach(listener => listener(message, 'delete'));
  });

  client.on('roleUpdate', async (message) => {
    messageListeners['roles']?.forEach(listener => listener(message, 'update'));
  });

  // **************************
  // ********* Shards *********
  // **************************
  client.on('shardReady', async (shardId, unavailableGuilds) => {
    messageListeners['shards']?.forEach(listener => listener({
      shardId,
      unavailableGuilds,
      event: null,
      error: null,
      replayedEvents: null,
    }, 'ready'));
  });

  client.on('shardDisconnect', async (event, shardId) => {
    messageListeners['shards']?.forEach(listener => listener({
      shardId,
      unavailableGuilds: null,
      event,
      error: null,
      replayedEvents: null,
    }, 'disconnect'));
  });

  client.on('shardError', async (error, shardId) => {
    messageListeners['shards']?.forEach(listener => listener({
      shardId,
      unavailableGuilds: null,
      event: null,
      error,
      replayedEvents: null,
    }, 'error'));
  });

  client.on('shardReconnecting', async (shardId) => {
    messageListeners['shards']?.forEach(listener => listener({
      shardId,
      unavailableGuilds: null,
      event: null,
      error: null,
      replayedEvents: null,
    }, 'reconnecting'));
  });

  client.on('shardResume', async (shardId, replayedEvents) => {
    messageListeners['shards']?.forEach(listener => listener({ shardId, unavailableGuilds: null, event: null, error: null, replayedEvents, }, 'resume'));
  });

  // **************************
  // ********* Stages *********
  // **************************
  client.on('stageInstanceCreate', async (message) => {
    messageListeners['stages']?.forEach(listener => listener(message, 'create'));
  });

  client.on('stageInstanceDelete', async (message) => {
    messageListeners['stages']?.forEach(listener => listener(message, 'delete'));
  });

  client.on('stageInstanceUpdate', async (message) => {
    messageListeners['stages']?.forEach(listener => listener(message, 'update'));
  });

  // **************************
  // ******** Stickers ********
  // **************************
  client.on('stickerCreate', async (message) => {
    messageListeners['stickers']?.forEach(listener => listener(message, 'create'));
  });

  client.on('stickerDelete', async (message) => {
    messageListeners['stickers']?.forEach(listener => listener(message, 'delete'));
  });

  client.on('stickerUpdate', async (message) => {
    messageListeners['stickers']?.forEach(listener => listener(message, 'update'));
  });

  // **************************
  // ******** Threads *********
  // **************************
  client.on('threadCreate', async (message) => {
    messageListeners['threads']?.forEach(listener => listener(message, 'create'));
  });

  client.on('threadDelete', async (message) => {
    messageListeners['threads']?.forEach(listener => listener(message, 'delete'));
  });

  client.on('threadUpdate', async (message) => {
    messageListeners['threads']?.forEach(listener => listener(message, 'update'));
  });

  client.on('threadMembersUpdate', async (oldMembers, newMembers) => {
    messageListeners['threadMembers']?.forEach(listener => listener(oldMembers, newMembers, 'update'));
  });

  client.on('threadMemberUpdate', async (oldMembers, newMembers) => {
    messageListeners['threadMembers']?.forEach(listener => listener(oldMembers, newMembers, 'update'));
  });

  // **************************
  // ********* Voice **********
  // **************************
  client.on('voiceStateUpdate', async (oldState, newState) => {
    messageListeners['voice']?.forEach(listener => listener(oldState, newState));
  });

  // **************************
  // ******** Webhooks ********
  // **************************
  client.on('webhookUpdate', async (message) => {
    messageListeners['webhooks']?.forEach(listener => listener(message));
  });
}