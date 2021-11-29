const express = require('express');

const userRouter = require('./resources/users/user.router');
const catalogRouter = require('./resources/catalog/catalog.router');

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/catalogs', catalogRouter);

module.exports = app;
