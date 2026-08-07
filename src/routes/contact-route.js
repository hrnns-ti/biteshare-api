const express = require('express');
const router = express.Router();

const { createMessage, deleteMessage } = require('../controllers/contact-controller');

router.post('/send', createMessage);
router.post('/delete', deleteMessage);

module.exports = router