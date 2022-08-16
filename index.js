require('dotenv').config();
require('isomorphic-fetch');
const InitializeBot = require('./src/configuration/initialize');

const PORT = process.env.PORT || 3000;

const express = require('express');

const app = express();

console.log('Mounting Discord bot...');

InitializeBot().then(() => {
  app.listen(PORT, async() => {
    console.log(`App listening on port ${PORT}`);
    console.log('Bot is ready to receive commands!');
  });
});