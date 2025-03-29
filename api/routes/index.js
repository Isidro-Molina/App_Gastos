const express = require('express');
const router = express.Router();
const { configDotenv } = require('dotenv');
const { connectToDB } = require('../db');
configDotenv();
const port = process.env.PORT;

router.get('/ping', async (req, res) => {
  const test = await connectToDB().catch(console.error);
  console.log('wop --->', test);
});

module.exports = { router };
