const { body } = require("express-validator");

const MIN_PASSWORD = 6;

module.exports = {
  create: () => [
    body("password")
      .isLength({ min: MIN_PASSWORD })
      .withMessage(`The password must be at least ${MIN_PASSWORD} characters`)
  ]
}