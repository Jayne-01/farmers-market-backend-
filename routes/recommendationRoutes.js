const express = require('express');
const router = express.Router();
const { authenticateToken, authorizeRole } = require('../middleware/authMiddleware');
const recommendationController = require('../controllers/recommendationController');

// Farmer recommendations
router.get('/market-insights', authenticateToken, authorizeRole('FARMER'), 
    recommendationController.getMarketInsights);
router.get('/demand-analysis', authenticateToken, authorizeRole('FARMER'), 
    recommendationController.getDemandAnalysis);

// Customer recommendations
router.get('/personalized', authenticateToken, authorizeRole('CUSTOMER'), 
    recommendationController.getPersonalizedRecommendations);

// Public recommendations
router.get('/customer-preferences', recommendationController.getCustomerPreferences);
router.get('/seasonal', recommendationController.getSeasonalRecommendations);

module.exports = router;