const express = require('express');
const router = express.Router();

const { createDonation, getDonations, changeStatus, myDonations } = require('../controllers/donation.controller')
const { verifyToken, isAdmin } = require('../middlewares/auth.middleware');

router.post('/apply', verifyToken, createDonation);
router.get('/list', verifyToken, isAdmin, getDonations);
router.post('/status', verifyToken, isAdmin, changeStatus);
router.get('/history', verifyToken, myDonations);

module.exports = router;