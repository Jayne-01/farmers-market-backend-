const express = require('express');
const router = express.Router();
const { authenticateToken, authorizeRole } = require('../middleware/authMiddleware');
const orderController = require('../controllers/orderController');

// Customer routes
router.post('/', authenticateToken, authorizeRole('CUSTOMER'), orderController.createOrder);
router.get('/customer', authenticateToken, authorizeRole('CUSTOMER'), orderController.getCustomerOrders);

// Farmer routes
router.get('/farmer', authenticateToken, authorizeRole('FARMER'), orderController.getFarmerOrders);
router.put('/:id/status', authenticateToken, authorizeRole('FARMER', 'ADMIN'), orderController.updateOrderStatus);

// Common routes (for both customer and farmer)
router.get('/:id', authenticateToken, orderController.getOrderById);

module.exports = router;