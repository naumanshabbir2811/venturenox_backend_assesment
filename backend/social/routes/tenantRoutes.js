const express = require('express');
const router = express.Router();
const tanantController = require('../controllers/tenantController');
const tryCatchMiddleware = require('../middlewares/trycatch.middleware');
const validateIdParam = require('../middlewares/validateParamId.middleware');
const validateTenantProfile = require('../middlewares/valiteTenantProfile.middleware');
const validateUpdateTenantProfile = require('../middlewares/validateTenantProfileUpdate.middleware');

// Create a tenant
router.post('/', validateTenantProfile, tryCatchMiddleware(tanantController.createTenant));

// Get all tenants
router.get('/', tryCatchMiddleware(tanantController.getAllTenants));

// Get tenant by ID
router.get('/:id', validateIdParam, tryCatchMiddleware(tanantController.getTenantById));

// Update tenant by ID
router.patch('/:id', validateIdParam,validateUpdateTenantProfile, tryCatchMiddleware(tanantController.updateTenant));

// Delete tenant by ID
router.delete('/:id', validateIdParam, tryCatchMiddleware(tanantController.deleteTenant));

module.exports = router;
