const express = require('express');
const router = express.Router();

const { createDonation, getDonations } = require('../controllers/donation.controller')
const { verifyToken, isAdmin } = require('../middlewares/auth.middleware');

router.post('/apply', verifyToken, createDonation);
router.get('/list', verifyToken, isAdmin, getDonations);

module.exports = router;