const express = require('express');
const User = require('../controllers/user');
const router = express.Router();

router.post('/userIp', User.ip);

module.exports = router;