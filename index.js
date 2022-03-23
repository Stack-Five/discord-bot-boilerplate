require('dotenv').config();
require('isomorphic-fetch');
require('./bot');

const PORT = process.env.PORT || 3000;

const express = require('express');

const app = express();

app.listen(PORT, async() => {
  console.log(`App listening on port ${PORT}...`);
});