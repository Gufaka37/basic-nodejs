const Catalog = require('./catalog.model');

const create = async (payload) => {
  const catalogCreatable = {
    ...payload
  };
  const cat = await Catalog.create(catalogCreatable);
  return cat;
}

const getAll = () => Catalog.getAll();

const getById = (id) => Catalog.getById(id);

const updateById = async (id, payload) => {
  const catalogUpdatable = {
    ...payload
  }
  return Catalog.updateById(id, catalogUpdatable)
}

const deleteById = async (id) => {
  const catalogDeleted = await Catalog.deleteById(id);

  return catalogDeleted;
}

module.exports = { create, getAll, getById, updateById, deleteById }