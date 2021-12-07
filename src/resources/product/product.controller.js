const Product = require('./product.model');
const productService = require('./product.service');
const categoryService = require('../category/category.service');

const catchErrors = require('../../common/catchErrors');

exports.create = catchErrors(async (req, res) => {
  const product = await productService.create(req.params.categoryId, req.body);
  if (!product) {
    return res
      .status(400)
      .json({ code: 400, msg: 'Product not created.' });
  }
  await categoryService.updateById(req.params.catalogId, req.params.categoryId, { product: Product.toResponse(product) });
  return res.status(201).json(Product.toResponse(product));
});

exports.getAll = catchErrors(async (req, res) => {
  const products = await productService.getAll(req.params.categoryId);
  return res.status(200).json(products.map(Product.toResponse));
});

exports.getById = catchErrors(async (req, res) => {
  const product = await productService.getById(req.params.categoryId, req.params.productId);
  if (!product) {
    return res
      .status(404)
      .json({ code: 404, msg: 'Product not found.' });
  }
  return res.status(200).json(Product.toResponse(product));
});

exports.updateById = catchErrors(async (req, res) => {
  const product = await productService.updateById(req.params.categoryId, req.params.productId, req.body);
  if (!product) {
    return res
      .status(404)
      .json({ code: 404, msg: 'Product not found.' });
  }
  return res.status(200).json(Product.toResponse(product));
});

exports.deleteById = catchErrors(async (req, res) => {
  const product = await productService.deleteById(req.params.categoryId, req.params.productId);
  if (!product) {
    return res
      .status(404)
      .json({ code: 404, msg: 'Product not found.' });
  }
  return res.status(200).json(Product.toResponse(product));
});