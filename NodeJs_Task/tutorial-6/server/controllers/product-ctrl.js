const Product= require('../models/product-model');

function sendResponseWithFailure(res, code, error) {
  return res.status(code).json({
    success: false,
    error,
  });
}

const createProduct = (req, res) => {
  const body = req.body;

  if (!body) {
    return sendResponseWithFailure(res, 400, 'You must provide a product details');
  }

  const product = new Product(body);

  if (!product) {
    return sendResponseWithFailure(res, 400, 'No product');
  }

  product
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: product._id,
        message: 'Product created',
      });
    })
    .catch(e => sendResponseWithFailure(res, 400, 'Product not created'));
};

const getProductById = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then(product => {
      if (!product) {
        return sendResponseWithFailure(res, 404, 'Product not found');
      }
      return res.status(200).json({ success: true, data: product });
    })
    .catch(error => sendResponseWithFailure(res, 400, error));
};

const getProducts = (req, res) => {
  Product.find({})
    .then(products => {
      if (!products.length) {
        return sendResponseWithFailure(res, 404, 'Products not found');
      }

      return res.status(200).json({ success: true, data: products });
    })
    .catch(error => console.log(error));
};

const updateProduct = (req, res) => {
  const body = req.body;

  if (!body) {
    return sendResponseWithFailure(res, 400, 'You must provide a valid payload to update');
  }

  Product.findOne({ _id: req.params.id }, (error, product) => {
    if (error) {
      return sendResponseWithFailure(res, 400, 'Product is not created');
    }
    product.type = body.type;
    product.price = body.price;
    product.quantity = body.quantity;
    product
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: product._id,
          message: 'Product updated',
        });
      })
      .catch(errorDetails => sendResponseWithFailure(res, 400, errorDetails));
  });
};

const deleteProduct = (req, res) => {
  Product.findOneAndDelete({ _id: req.params.id }, (error, product) => {
    if (error) {
      return sendResponseWithFailure(res, 400, error);
    }

    if (!product) {
      return sendResponseWithFailure(res, 404, 'Product not found');
    }

    return res.status(200).json({ success: true, data: product });
  }).catch(error => console.log(error));
};

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  getProductById,
};