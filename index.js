require('dotenv').config();
require('isomorphic-fetch');
const InitializeBot = require('./bot/configuration/initialize');

const PORT = process.env.PORT || 3000;

const express = require('express');

const app = express();

console.log('Mounting Discord bot...');

InitializeBot().then(() => {
  app.listen(PORT, async() => {
    console.log(`App listening on port ${PORT}`);
  });
});