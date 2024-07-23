const express = require('express');
const router = express.Router();
const cc = require('../controllers/customerController')

// Get customer data
router.get('/get-customers', cc.getCustomers);

module.exports = router;