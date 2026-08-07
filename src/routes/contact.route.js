const express = require('express');
const router = express.Router();

const { createMessage, deleteMessage, readMessage } = require('../controllers/contact.controller');

router.post('/send', createMessage); // send message
router.post('/delete', deleteMessage); // delete message
router.get('/all', readMessage); // read all message

module.exports = router