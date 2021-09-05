const express = require('express');

const OrderController = require('../controllers/order-ctrl');

const orderRouter = express.Router();

orderRouter.post('/orders', OrderController.createOrder);
orderRouter.get('/orders/:id', OrderController.getOrderById);
orderRouter.get('/orders', OrderController.getOrders);
orderRouter.delete('/orders/:id', OrderController.deleteOrder);

module.exports = orderRouter;