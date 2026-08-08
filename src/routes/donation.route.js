const express = require('express');
const router = express.Router();

const { createDonation } = require('../controllers/donation.controller')

const { verifyToken, isAdmin } = require('../middlewares/auth.middleware');

router.post('/apply', verifyToken, createDonation);

module.exports = router;