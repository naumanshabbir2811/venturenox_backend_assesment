// controllers/userController.js

const userService = require('../services/userService');
const { apiResponse } = require('../utilities/response');

class UserController {
  async getAllUsers(req, res) {
    const users = await userService.getAllUsers();
    res.status(users.status).json(apiResponse(users));

  }

  async getUserById(req, res) {
    const userId = req.params.id;
    const user = await userService.getUserById(userId);
    return res.status(user.status).json(apiResponse(user));
  }

  async createUser(req, res) {
    const userData = req.body;
    const user = await userService.createUser({ ...userData, is_active: true });
    res.status(user.status).json(apiResponse(user));
  }

  async updateUser(req, res) {
    const userId = req.params.id;
    const userData = req.body;
    const user = await userService.updateUser(userId, userData);
    return res.status(user.status).json(apiResponse(user))

  }

  async deleteUser(req, res) {
    const userId = req.params.id;
    const user = await userService.deleteUser(userId);
    return res.status(user.status).json(apiResponse(user))
  }
}

module.exports = new UserController();
