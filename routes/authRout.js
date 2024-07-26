const express = require('express');
const router = express.Router();
const ac = require('../controllers/authController')

// Get customer data
router.post('/login', ac.empLogin);
router.post('/register', ac.empRegister);

module.exports = router;