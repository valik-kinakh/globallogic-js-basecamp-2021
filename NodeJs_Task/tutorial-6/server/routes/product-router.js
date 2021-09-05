const express = require('express');

const ProductController = require('../controllers/product-ctrl');

const router = express.Router();

router.post('/products', ProductController.createProduct);
router.put('/products/:id', ProductController.updateProduct);
router.delete('/products/:id', ProductController.deleteProduct);
router.get('/products/:id', ProductController.getProductById);
router.get('/products', ProductController.getProducts);

module.exports = router;