const express = require('express');
const router = express.Router();
const cc = require('../controllers/customerController')

// Get customer data
router.get('/get-customers', cc.getCustomers);
router.post('/add-customers', cc.addCustomers);
router.put('/update-customers/:id', cc.updateCustomers);
router.delete('/delete-customers/:id', cc.deleteCustomers);

module.exports = router;