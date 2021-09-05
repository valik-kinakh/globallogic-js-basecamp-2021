const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    email: { type: String, required: true },
    address: { type: String, required: true },
    order: { type: Array, required: true }
  },
  {
    bufferCommands: false, capped: { size: 1000000, max: 100 }
  }
);

module.exports = mongoose.model('orders', OrderSchema);