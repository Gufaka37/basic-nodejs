const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) return next();

  return res
    .status(400)
    .json({ code: 'VALIDATION_ERROR', errors: errors.array() });
};