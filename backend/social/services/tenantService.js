const TenantProfile = require('../models/Tenant');
const { RESPONSE_CONSTANTS } = require('../utilities/constants');
const { successResponse, errorResponse } = require('../utilities/response');

class TenantService {
  async createTenant(tenantData) {
    await TenantProfile.create(tenantData);
    return successResponse(null, "Tenant created", RESPONSE_CONSTANTS.CREATED)
  }

  async getAllTenants() {
      const tenants = await TenantProfile.findAll({ where: { is_active: true }, order: [['tenant_id', 'DESC']] });
      if (!tenants.length)
        return errorResponse("No tenant found", RESPONSE_CONSTANTS.NOT_FOUND)
      return successResponse(tenants, "Tenants", RESPONSE_CONSTANTS.OK)
  

  }

  async getTenantById(tenantId) {
    const tenant = await TenantProfile.findOne({ where: { tenant_id: tenantId, is_active: true } });
    if (!tenant)
      return errorResponse(`Tenant with id ${tenantId} not found`, RESPONSE_CONSTANTS.NOT_FOUND)
    return successResponse(tenant, "Tenant found", RESPONSE_CONSTANTS.OK)
  }

  async updateTenant(tenantId, updatedData) {
    const tenant = await TenantProfile.findOne({ where: { tenant_id: tenantId, is_active: true } });
    if (!tenant)
      return errorResponse(`Tenant with id ${tenantId} not found`, RESPONSE_CONSTANTS.NOT_FOUND)
    await tenant.update(updatedData)
    return successResponse(null, "Tenant updated", RESPONSE_CONSTANTS.OK)
  }

  async deleteTenant(tenantId) {
    const tenant = await TenantProfile.findOne({ where: { tenant_id: tenantId, is_active: true } });
    if (!tenant)
      return errorResponse(`Tenant with id ${tenantId} not found`, RESPONSE_CONSTANTS.NOT_FOUND)

    await tenant.update({ is_active: false })

    return successResponse(null, "Tenant deleted", RESPONSE_CONSTANTS.OK)
  }
}

module.exports = new TenantService();
