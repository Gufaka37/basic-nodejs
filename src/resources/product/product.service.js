const Product = require('./product.model');
const Category = require('../category/category.model');

const create = async (categoryId, payloads) => {
  const productCreatable = {
    ...payloads,
    categoryId
  }
  const product = await Product.create(productCreatable);
  return product;
}

const getAll = async (categoryId) => {
  const products = Product.getAll(categoryId);
  return products;
}

const getById = async (categoryId, productId) => {
  const product = await Product.getById(categoryId, productId);
  return product;
}

const updateById = async (categoryId, productId, payload) => {
  const product = await Product.updateById(categoryId, productId, payload);
  return product;
}

const deleteById = async (categoryId, productId) => {
  const product = await Product.deleteById(categoryId, productId);
  if(product) {
    await Category.deleteProductById(categoryId, productId);
  }
  return product;
}

module.exports = { create, getAll, getById, updateById, deleteById }