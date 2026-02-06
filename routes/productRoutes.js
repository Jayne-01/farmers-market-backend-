const express = require('express');
const router = express.Router();
const { authenticateToken, authorizeRole } = require('../middleware/authMiddleware');
const productController = require('../controllers/productController');

// Public routes
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);

// Farmer routes
router.post('/', authenticateToken, authorizeRole('FARMER'), productController.createProduct);
router.get('/farmer/products', authenticateToken, authorizeRole('FARMER'), productController.getFarmerProducts);
router.put('/:id', authenticateToken, authorizeRole('FARMER'), productController.updateProduct);
router.delete('/:id', authenticateToken, authorizeRole('FARMER'), productController.deleteProduct);

module.exports = router;