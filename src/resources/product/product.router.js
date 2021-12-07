const router = require('express').Router();

const productController = require('./product.controller');

router.route('/:catalogId/categories/:categoryId/products')
  .get(productController.getAll)
  .post(productController.create);

router.route('/:catalogId/categories/:categoryId/products/:productId')
  .get(productController.getById)
  .put(productController.updateById)
  .delete(productController.deleteById);

module.exports = router;