const Category = require('./category.model');
const Catalog = require('../catalog/catalog.model');
const Product = require('../product/product.model');

const create = async (catalogId, payloads) => {
  const categoryCreatable = {
    ...payloads,
    catalogId
  }
  const category = await Category.create(categoryCreatable);
  return category;
}

const getAll = async (catalogId) => {
  const categories = await Category.getAll(catalogId);
  return categories;
}

const getById = async (catalogId, categoryId) => {
  const category = await Category.getById(catalogId, categoryId);
  return category;
}

const updateById = async (catalogId, categoryId, payload) => {
  const categoryUpdatable = {
    ...payload,
    products: payload.product
  }
  const updatedCategory = await Category.updateById(catalogId, categoryId, categoryUpdatable);
  return updatedCategory;
}

const deleteById = async (catalogId, categoryId) => {
  const deletableCategory = await Category.deleteById(catalogId, categoryId);

  if (deletableCategory) {
    const products = Product.getAll(categoryId);
    await Catalog.deleteCategoryById(catalogId, categoryId);
    (await products).forEach((product) => {Product.deleteById(categoryId, product.id)})
  }

  return deletableCategory;
}

module.exports = { create, getAll, getById, updateById, deleteById }