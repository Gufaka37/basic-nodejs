const categories = require('../../data/categories');

const add = async (category) => {
  categories.push(category);
  return category;
}

const getAll = async (catalogId) => {
  const categoriesByCatalog = [];
  categories.map((category) => {
    if (category.catalogId === catalogId)
      categoriesByCatalog.push(category);
    return null;
  });
  return categoriesByCatalog;
}

const getById = async (catalogId, categoryId) =>
  categories.find((category) => category.id === categoryId && category.catalogId === catalogId);

const deleteById = async (catalogId, categoryId) => {
  const index = categories.findIndex((category) => category.catalogId === catalogId && category.id === categoryId);
  if (index === -1) return null;
  const categoryDeletable = categories[index];
  categories.splice(index, 1);
  return categoryDeletable;
}

module.exports = { add, getAll, getById, deleteById }