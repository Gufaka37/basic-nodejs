const User = require('./user.model');

const create = async (payload) => User.create(payload);

const getAll = () => User.getAll();

module.exports = { create, getAll };
