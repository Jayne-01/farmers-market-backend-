const express = require('express');
const router = express.Router();
const { authenticateToken, authorizeRole } = require('../middleware/authMiddleware');
const farmerController = require('../controllers/farmerController');

// All farmer routes require authentication and farmer role
router.use(authenticateToken);
router.use(authorizeRole('FARMER'));

// Dashboard
router.get('/dashboard', farmerController.getFarmerDashboard);

// Profile Management
router.put('/profile', farmerController.updateFarmerProfile);

// Reports and Analytics
router.get('/sales-report', farmerController.getFarmerSalesReport);
router.get('/performance-metrics', farmerController.getFarmerPerformanceMetrics);

// Inventory Management
router.get('/inventory', farmerController.getFarmerInventory);

// Customer Reviews
router.get('/reviews', farmerController.getFarmerCustomerReviews);

module.exports = router;