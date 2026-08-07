const express = require('express');
const { signin, signup, forgotPass } = require('../controllers/user.controller');
const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.post('/forgot', forgotPass);

module.exports = router