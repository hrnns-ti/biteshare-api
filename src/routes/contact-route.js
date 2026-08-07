const express = require('express');
const router = express.Router();

const { createMessage, deleteMessage, readMessage } = require('../controllers/contact-controller');

router.post('/send', createMessage);
router.post('/delete', deleteMessage);
router.get('/all', readMessage);

module.exports = router