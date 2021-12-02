const { v4: uuid } = require('uuid');

const catalogRepo = require("./catalog.memory.repository");

class Catalog {
  constructor({ id = uuid(), title = 'CATALOG', categories = [] } = {}) {
    this.id = id;
    this.title = title;
    this.categories = categories;
  }

  static async create(payload) {
    const catalog = new Catalog(payload);
    const catalogAdded = await catalogRepo.add(catalog);
    return catalogAdded;
  }

  static async getAll() {
    const catalogs = await catalogRepo.getAll();
    return catalogs;
  }

  static async getById(id) {
    const catalog = await catalogRepo.getById(id);
    return catalog;
  }

  static async updateById(id, payload) {
    const catalog = await catalogRepo.getById(id);
    const catalogUpdated = catalog?.update(payload);
    return catalogUpdated;
  }

  async update(payload) {
    const { title, category } = payload;
    if (title !== undefined) this.title = title;
    if (category !== undefined) this.categories.push(category);
    return this;
  }

  static async deleteById(id) {
    const catalog = await catalogRepo.deleteById(id);
    return catalog;
  }

  static async deleteCategoryById(catalogId, categoryId) {
    await catalogRepo.deleteCategoryById(catalogId, categoryId);
  }

  static toResponse(catalog) {
    const { id, title, categories } = catalog;
    return { id, title, categories }
  }
}

module.exports = Catalog;