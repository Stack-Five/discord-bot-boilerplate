const inquirer = require('inquirer');

module.exports = async () => {
  const answer = await inquirer
    .prompt([
      {
        type: 'list',
        name: 'handlerType',
        message: `What type of event handler would you like to create?\n`,
        pageSize: 8,
        loop: false,
        choices: [
          new inquirer.Separator('------ COMMON HANDLERS ------'),
          { name: 'Messages', value: 'messages' },
          { name: 'Roles', value: 'roles' },
          { name: 'Channels', value: 'channels' },
          { name: 'Message Reactions', value: 'messageReactions' },
          { name: 'User Join / Leave', value: 'userJoinLeave' },
          { name: 'Threads', value: 'threads' },
          { name: 'User Updates', value: 'userUpdate' },
          new inquirer.Separator('------ OTHER HANDLERS ------'),
          { name: 'Bans', value: 'bans' },
          { name: 'Bot Ready', value: 'botReady' },
          { name: 'Emojis', value: 'emojis' },
          { name: 'Guild Join / Leave', value: 'guildJoinLeave' },
          { name: 'Guild Scheduled Events', value: 'guildScheduledEvents' },
          { name: 'Guild Scheduled Event Members', value: 'guildScheduledEventsMembers' },
          { name: 'Guild Update', value: 'guildUpdate' },
          { name: 'Invites', value: 'invites' },
          { name: 'Ping', value: 'ping' },
          { name: 'Shards', value: 'shards' },
          { name: 'Stages', value: 'stages' },
          { name: 'Stickers', value: 'stickers' },
          { name: 'Thread Members', value: 'threadMembers' },
          { name: 'Typing Start', value: 'typingStart' },
          { name: 'User Presence', value: 'userPresence' },
          { name: 'Voice', value: 'voice' },
          { name: 'Webhooks', value: 'webhooks' },
        ]
      },
    ]);

  let { handlerType } = answer;

  console.clear();
  return handlerType;
};