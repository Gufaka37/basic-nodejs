const bcrypt = require('bcrypt');
const { v4: uuid } = require('uuid');

const usersRepo = require('./user.memory.repository');

class User {
  constructor({ id = uuid(), name = 'USER', login = 'user', password = 'P@55w0rd' } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = bcrypt.hashSync(password, 10);
  }

  static async create(payload) {
    const user = new User(payload);
    const userAdded = await usersRepo.add(user);
    return userAdded;
  }

  static async getAll() {
    const users = await usersRepo.getAll();
    return users;
  }

  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
