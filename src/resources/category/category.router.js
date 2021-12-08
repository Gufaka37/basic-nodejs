const router = require('express').Router();

const categoryController = require('./category.controller');

router.route('/:catalogId/categories')
  .get(categoryController.getAll)
  .post(categoryController.create);

router.route('/:catalogId/categories/:categoryId')
  .get(categoryController.getById)
  .put(categoryController.updateById)
  .delete(categoryController.deleteById);

module.exports = router;