const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');


routes.get('/users', UserController.index);
routes.post('/users', UserController.create);
routes.put('/users', UserController.update);
routes.delete('/users', UserController.delete);


module.exports = routes
