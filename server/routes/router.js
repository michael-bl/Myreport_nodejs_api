const express = require('express');
const route = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller');

/**
 * @description Root route
 * @Method GET/
 */
route.get('/', services.homeRoutes);

/**
 * @description For add new report bottleneck
 * @Method GET/add-bottleneck
 */
route.get('/add-bottleneck',services.add_bottleneck);

/**
 * @description For update report bottleneck
 * @Method GET/update-bottleneck
 */
route.get('/update-bottleneck',services.update_bottleneck);

// API
route.post('/api/bottleneck', controller.create);
route.get('/api/bottleneck', controller.find);
route.put('/api/bottleneck/:code', controller.update);
route.delete('/api/bottleneck/:code', controller.delete);

module.exports = route