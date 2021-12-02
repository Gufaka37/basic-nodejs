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

const deleteCategoryById = async (catalogId, categoryId) => {
  const updatedCatalog = catalogs.find((catalog) => catalog.id === catalogId);
  if (updatedCatalog) {
    const index = updatedCatalog.categories.findIndex((category) => category.id === categoryId);
    if (index !== -1) {
      updatedCatalog.categories.splice(index, 1);
    }
  }
}

module.exports = { add, getAll, getById, deleteById, deleteCategoryById }