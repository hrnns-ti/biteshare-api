const express = require('express');
const router = express.Router();

const { createMessage } = require('../controllers/contact-controller');

router.post('/send', createMessage);

module.exports = router