const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    _id: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    topSpeed: { type: Number, required: true },
    topHeight: { type: Number, required: true }
  },
  {
    bufferCommands: false, capped: { size: 1000000, max: 100 }
  }
);

module.exports = mongoose.model('products', ProductSchema);

