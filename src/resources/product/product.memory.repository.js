const products = require('../../data/products');

const add = async (product) => {
  products.push(product);
  return product;
}

const getAll = async (categoryId) => {
  const productsByCategories = [];
  products.map((product) => {
    if (product.categoryId === categoryId)
      productsByCategories.push(product);
    return null;
  });
  return productsByCategories;
}

const getById = async (categoryId, productId) =>
  products.find((product) => product.id === productId && product.categoryId === categoryId);


const deleteById = async (categoryId, productId) => {
  const index = products.findIndex((product) => product.id === productId && product.categoryId === categoryId);
  if (index === -1) return null;
  const productDeleted = products[index];
  products.splice(index, 1);
  return productDeleted;
}

module.exports = { add, getAll, getById, deleteById }