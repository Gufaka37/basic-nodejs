const User = require('./user.model');

const catchErrors = require('../../common/catchErrors');
const usersService = require('./user.service');

exports.create = catchErrors(async (req, res) => {
  const user = await usersService.create(req.body);
  if (!user) {
    return res
      .status(400)
      .json({ code: 'USER_NOT_CREATE', message: 'User not created' });
  }
  return res.status(201).json(User.toResponse(user));
});

exports.getAll = catchErrors(async (req, res) => {
  const users = await usersService.getAll();
  return res.status(200).json(users.map(User.toResponse));
});