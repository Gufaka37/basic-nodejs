const { v4: uuid } = require('uuid');

const productRepo = require('./product.memory.repository');

class Product {
  constructor({ id = uuid(), title = 'PRODUCT', price = 0, description = 'New product.', categoryId = null }) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.categoryId = categoryId;
  }

  static async create(payloads) {
    const product = new Product(payloads);
    const productCreated = await productRepo.add(product);
    return productCreated;
  }

  static async getAll(categoryId) {
    const products = await productRepo.getAll(categoryId);
    return products;
  }

  static async getById(categoryId, productId) {
    const product = await productRepo.getById(categoryId, productId);
    return product;
  }

  static async updateById(categoryId, productId, payload) {
    const product = await productRepo.getById(categoryId, productId);
    const productUpdated = product?.update(payload);
    return productUpdated;
  }

  async update(payload) {
    const { title, price, description } = payload;
    if (title !== undefined) this.title = title;
    if (price !== undefined) this.price = price;
    if (description !== undefined) this.description = description;
    return this;
  }

  static async deleteById(categoryId, productId) {
    const product = await productRepo.deleteById(categoryId, productId);
    return product;
  }

  static toResponse(product) {
    const { id, title, price, description, categoryId } = product;
    return { id, title, price, description, categoryId }
  }
}

module.exports = Product;