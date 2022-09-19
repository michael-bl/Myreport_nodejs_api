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
route.get('/add-cuellobotella',services.add_cuellobotella);

/**
 * @description For update report cuello botella
 * @Method GET/update-cuellobotella
 */
route.get('/update-cuellobotella',services.update_cuellobotella);

// API
route.post('/api/cuellosbotella', controller.create);
route.get('/api/cuellosbotella', controller.find);
route.put('/api/cuellosbotella/:code', controller.update);
route.delete('/api/cuellosbotella/:code', controller.delete);

module.exports = route