const Order = require('../models/order-model');

function sendResponseWithFailure(res, code, error) {
  return res.status(code).json({
    success: false,
    error
  });
}

const createOrder = (req, res) => {
  const body = req.body;

  if (!body) {
    return sendResponseWithFailure(res, 400, 'You must provide a order details');
  }

  const order = new Order(body);

  if (!order) {
    return sendResponseWithFailure(res, 400, 'No order');
  }

  order
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: order._id,
        message: 'Order created'
      });
    })
    .catch(err => sendResponseWithFailure(res, 400, 'Order not created'));

};

const getOrders = (req, res) => {
  Order.find({})
    .then(orders => {
      if (!orders.length) {
        return sendResponseWithFailure(res, 404, 'Orders not found');
      }

      return res.status(200).json({ success: true, data: orders });
    })
    .catch(error => console.log(error));
};

const getOrderById = (req, res) => {
  Order.findOne({ '_id': req.params.id }).then((order) => {
    if (!order) {
      return sendResponseWithFailure(res, 404, 'Order not found');
    }

    return res.status(200).json({ success: true, data: order });
  })
    .catch(err => console.log(err));
};

const deleteOrder = (req, res) => {
  Order.findOneAndDelete({ '_id': req.params.id }).then((order) => {
    if (!order) {
      return sendResponseWithFailure(res, 404, 'Order not found');
    }

    return res.status(200).json({ success: true, message: 'Order successfully deleted' });
  })
    .catch(err => console.log(err));
};

module.exports = {
  createOrder,
  getOrders,
  deleteOrder,
  getOrderById
};