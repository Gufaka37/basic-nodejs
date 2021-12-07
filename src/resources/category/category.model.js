const { v4: uuid } = require('uuid');

const categoryRepo = require('./category.memory.repository');

class Category {
  constructor({ id = uuid(), title = 'CATEGORY', catalogId = null, products = [] }) {
    this.id = id;
    this.title = title;
    this.catalogId = catalogId;
    this.products = products;
  }

  static async create(payloads) {
    const category = new Category(payloads);
    const categoryCreated = await categoryRepo.add(category);
    return categoryCreated;
  }

  static async getAll(catalogId) {
    const categories = await categoryRepo.getAll(catalogId);
    return categories;
  }

  static async getById(catalogId, categoryId) {
    const category = await categoryRepo.getById(catalogId, categoryId);
    return category;
  }

  static async updateById(catalogId, categoryId, payload) {
    const category = await categoryRepo.getById(catalogId, categoryId);
    const updatedCategory = category?.update(payload);
    return updatedCategory;
  }

  async update(payload) {
    const { title, product } = payload;
    if (title !== undefined) this.title = title;
    if (product !== undefined) this.products.push(product);
    return this;
  }

  static async deleteById(catalogId, categoryId) {
    const categoryDeletable = await categoryRepo.deleteById(catalogId, categoryId);
    return categoryDeletable;
  }

  static async deleteProductById(categoryId, productId) {
    await categoryRepo.deleteProductById(categoryId, productId);
  }

  static toResponse(category) {
    const { id, title, catalogId, products} = category;
    return {id, title, catalogId, products }
  }
}

module.exports = Category;