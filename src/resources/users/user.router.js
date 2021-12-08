const router = require('express').Router();

const usersController = require('./user.controller');
const userValidator = require("./user.validator");

const { validate } = require('../../middlewares');

router
  .route('/')
  .get(usersController.getAll)
  .post([userValidator.create(), validate, usersController.create]);

module.exports = router;
