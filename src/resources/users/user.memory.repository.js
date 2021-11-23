const users = require('../../data/users');

const add = async (user) => {
  users.push(user);
  return user;
}

const getAll = async () => users;

module.exports = { add, getAll };
