const Catalog = require('./catalog.model');
const Category = require('../category/category.model');

const create = async (payload) => {
  const catalogCreatable = {
    ...payload
  };
  const catalog = await Catalog.create(catalogCreatable);
  return catalog;
}

const getAll = () => Catalog.getAll();

const getById = (id) => Catalog.getById(id);

const updateById = async (id, payload) => {
  const catalogUpdatable = {
    ...payload,
    categories: payload.category
  }
  const catalogUpdated = await Catalog.updateById(id, catalogUpdatable);
  return catalogUpdated;
}

const deleteById = async (id) => {
  const catalogDeleted = await Catalog.deleteById(id);

  if (catalogDeleted) {
    const categories = Category.getAll(id);
    (await categories).forEach((category) => {Category.deleteById(id, category.id)});
  }

  return catalogDeleted;
}

module.exports = { create, getAll, getById, updateById, deleteById }