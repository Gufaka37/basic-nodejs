const catalogs = require('../../data/catalogs');

const add = async (catalog) => {
  catalogs.push(catalog);
  return catalog;
};

const getAll = async () => catalogs;

const getById = async (id) => catalogs.find((catalog) => catalog.id === id);

const deleteById = async (id) => {
  const index = catalogs.findIndex((catalog) => catalog.id === id);
  if (index === -1) return null;
  const catalogDeletable = catalogs[index];
  catalogs.splice(index, 1);
  return catalogDeletable;
}

module.exports = { add, getAll, getById, deleteById }