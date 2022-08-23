module.exports = [
  {
    name: 'String',
    value: 'string',
    canHaveChoices: true,
    djsOptionName: 'addStringOption',
    djsOptionGetter: 'getString'
  },
  {
    name: 'Integer',
    value: 'integer',
    canHaveChoices: true,
    djsOptionName: 'addIntegerOption',
    djsOptionGetter: 'getInteger'
  },
  {
    name: 'Number',
    value: 'number',
    canHaveChoices: true,
    djsOptionName: 'addNumberOption',
    djsOptionGetter: 'getNumber'
  },
  {
    name: 'Boolean',
    value: 'boolean',
    canHaveChoices: false,
    djsOptionName: 'addBooleanOption',
    djsOptionGetter: 'getBoolean'
  },
  {
    name: 'User',
    value: 'user',
    canHaveChoices: false,
    djsOptionName: 'addUserOption',
    djsOptionGetter: 'getUser'
  },
  {
    name: 'Channel',
    value: 'channel',
    canHaveChoices: false,
    djsOptionName: 'addChannelOption',
    djsOptionGetter: 'getChannel'
  },
  {
    name: 'Role',
    value: 'role',
    canHaveChoices: false,
    djsOptionName: 'addRoleOption',
    djsOptionGetter: 'getRole'
  },
  {
    name: 'Mentionable',
    value: 'mentionable',
    canHaveChoices: false,
    djsOptionName: 'addMentionableOption',
    djsOptionGetter: 'getMentionable'
  },
  {
    name: 'Attachment',
    value: 'attachment',
    canHaveChoices: false,
    djsOptionName: 'addAttachmentOption',
    djsOptionGetter: 'getAttachment'
  },
]