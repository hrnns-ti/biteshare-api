const express = require('express');
const router = express.Router();

const { createMessage, deleteMessage, readMessage } = require('../controllers/contact.controller');
const { verifyToken, isAdmin } = require('../middlewares/auth.middleware');

router.post('/send', createMessage); // send message
router.post('/delete', deleteMessage); // delete message
router.get('/all', verifyToken, isAdmin, readMessage); // read all message

module.exports = router