const router = require('express').Router();

const catalogController = require('./catalog.controller');

router.route('/')
  .get(catalogController.getAll)
  .post(catalogController.create);

router.route('/:catalogId')
  .get(catalogController.getById)
  .put(catalogController.updateById)
  .delete(catalogController.deleteById);

module.exports = router;