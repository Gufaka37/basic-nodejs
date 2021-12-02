const Category = require('./category.model');
const catalogService = require('../catalog/catalog.service');

const catchErrors = require('../../common/catchErrors');
const categoryService = require('./category.service');

exports.create = catchErrors(async (req, res) => {
  const category = await categoryService.create(req.params.catalogId, req.body);
  if (!category) {
    return res
      .status(400)
      .json({ code: 400, msg: 'Category not created.' });
  }
  await catalogService.updateById(req.params.catalogId, {category: Category.toResponse(category)});
  return res.status(201).json(Category.toResponse(category));
});

exports.getAll = catchErrors(async (req, res) => {
  const categories = await categoryService.getAll(req.params.catalogId);
  return res.status(200).json(categories.map(Category.toResponse));
});

exports.getById = catchErrors(async (req, res) => {
  const category = await categoryService.getById(req.params.catalogId, req.params.categoryId);
  if (!category) {
    return res
      .status(404)
      .json({ code: 404, msg: 'Category not found.' });
  }
  return res.status(200).json(Category.toResponse(category));
});

exports.updateById = catchErrors(async (req, res) => {
  const category = await categoryService.updateById(req.params.catalogId, req.params.categoryId, req.body);
  if (!category) {
    return res
      .status(404)
      .json({ code: 404, msg: 'Category not found.' });
  }
  return res.status(200).json(Category.toResponse(category));
});

exports.deleteById = catchErrors(async (req, res) => {
  const category = await categoryService.deleteById(req.params.catalogId, req.params.categoryId);
  if (!category) {
    return res
      .status(404)
      .json({ code: 404, msg: 'Category not found.' });
  }
  return res.status(200).json(Category.toResponse(category));
})