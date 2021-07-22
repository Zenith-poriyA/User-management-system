const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');
//root route and method get
route.get('/',services.homeRoutes);

//add-user and method get
route.get('/add_user',services.add_user);

//update-user and method get
route.get('/update_user',services.update_user);

//API route
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);

module.exports = route;