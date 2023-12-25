// services/userService.js
const TenantProfile = require('../models/Tenant');
const User = require('../models/User');
const { RESPONSE_CONSTANTS } = require('../utilities/constants');
const { errorResponse, successResponse } = require('../utilities/response');

class UserService {
  async getAllUsers() {
    const users = await User.findAll({ where: { is_active: true }, order: [['id', 'DESC']], });
    if (!users.length)
      return errorResponse("users not found", RESPONSE_CONSTANTS.NOT_FOUND)
    return successResponse(users, "users found", RESPONSE_CONSTANTS.OK)
  }

  async getUserById(userId) {
    const user = await User.findOne({ where: { id: userId, is_active: true } });
    if (!user)
      return errorResponse("user not found", RESPONSE_CONSTANTS.NOT_FOUND)
    return successResponse(user, "user found", RESPONSE_CONSTANTS.OK)
  }

  async createUser(userData) {
    const checkTenant = await TenantProfile.findOne({ where: { tenant_id: userData.tenant_id, is_active: true } })
    if (!checkTenant)
      return errorResponse("Bad Request", RESPONSE_CONSTANTS.BAD_REQUEST)
    const user = await User.create(userData);
    if (!user)
      return errorResponse("user not found", RESPONSE_CONSTANTS.INTERNAL_SERVER_ERROR)
    return successResponse(null, "user created", RESPONSE_CONSTANTS.CREATED)
  }

  async updateUser(userId, userData) {
    const user = await User.findOne({ where: { id: userId, is_active: true } });
    if (!user)
      return errorResponse("user not found", RESPONSE_CONSTANTS.NOT_FOUND)
    await user.update(userData);
    return successResponse(null, "user updated", RESPONSE_CONSTANTS.OK);

  }

  async deleteUser(userId) {
    const user = await User.findOne({ where: { id: userId, is_active: true } });
    if (!user)
      return errorResponse("user not found", RESPONSE_CONSTANTS.NOT_FOUND)
    await user.update({ is_active: false });
    return successResponse(null, "user updated", RESPONSE_CONSTANTS.OK);
  }
}

module.exports = new UserService();
