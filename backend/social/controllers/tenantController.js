const tenantService = require('../services/tenantService');
const { apiResponse } = require('../utilities/response');

class TenantController {
  async createTenant(req, res) {
    const tenantData = req.body;
    const result = await tenantService.createTenant({ ...tenantData, is_active: true });
    res.status(result.status).json(apiResponse(result));
  }

  async getAllTenants(req, res) {
    const result = await tenantService.getAllTenants();
    res.status(result.status).json(apiResponse(result));

  }

  async getTenantById(req, res) {

    const tenantId = req.params.id;
    const tenant = await tenantService.getTenantById(tenantId);
    return res.status(tenant.status).json(apiResponse(tenant))
  }

  async updateTenant(req, res) {
    const tenantId = req.params.id;
    const updatedData = req.body;
    const result = await tenantService.updateTenant(tenantId, updatedData);
    return res.status(result.status).json(apiResponse(result))

  }

  async deleteTenant(req, res) {
    const tenantId = req.params.id;
    const result = await tenantService.deleteTenant(tenantId);
    return res.status(result.status).json(apiResponse(result))
  }
}

module.exports = new TenantController();
