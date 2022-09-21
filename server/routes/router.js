const express = require('express');
const route = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller');

/**
 * @description Root Route
 * @Method GET/
 */
route.get('/', services.homeRoutes);

/**
 * @description For add new report cuello botella
 * @Method GET/add-cuellobotella
 */
route.get('/add-bottleneck',services.add_bottleneck);

/**
 * @description For update report cuello botella
 * @Method GET/update-cuellobotella
 */
route.get('/update-bottleneck',services.update_bottleneck);

// API
route.post('/api/bottleneck', controller.create);
route.get('/api/bottleneck', controller.find);
route.put('/api/bottleneck/:code', controller.update);
route.delete('/api/bottleneck/:code', controller.delete);

module.exports = route