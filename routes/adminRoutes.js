const express = require('express');
const router = express.Router();
const { authenticateToken, authorizeRole } = require('../middleware/authMiddleware');
const adminController = require('../controllers/adminController');

// All admin routes require authentication and admin role
router.use(authenticateToken);
router.use(authorizeRole('ADMIN'));

// User Management
router.get('/users', adminController.getAllUsers);
router.get('/users/:id', adminController.getUserDetails);
router.put('/users/:id/status', adminController.updateUserStatus);
router.put('/users/:id/role', adminController.updateUserRole);

// Farmer Management
router.put('/farmers/:id/verify', adminController.verifyFarmer);
router.get('/farmers/pending-verification', adminController.getPendingVerifications);

// Product Management
router.get('/products', adminController.getAllProducts);
router.put('/products/:id/status', adminController.updateProductStatus);

// Order Management
router.get('/orders', adminController.getAllOrders);
router.put('/orders/:id', adminController.updateOrder);

// System Analytics
router.get('/analytics', adminController.getSystemAnalytics);

// System Settings
router.put('/settings', adminController.updateSystemSettings);
router.get('/logs', adminController.getSystemLogs);

module.exports = router;