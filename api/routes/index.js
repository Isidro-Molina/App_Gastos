const express = require('express');
const router = express.Router();

router.get('/ping', async (req, res) => {
  console.log('wop')
});


module.exports = { router };