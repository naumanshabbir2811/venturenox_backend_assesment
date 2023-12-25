// routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');
const tryCatchMiddleware = require('../middlewares/trycatch.middleware');
const validateIdParam = require('../middlewares/validateParamId.middleware');
const validateUserProfile = require('../middlewares/validateUserProfile.middleware');
const validateUpdateUserProfile = require('../middlewares/validateUserProfileUpdate.middleware');

const router = express.Router();

router.post('/', validateUserProfile, tryCatchMiddleware(userController.createUser));
router.get('/', tryCatchMiddleware(userController.getAllUsers));
router.get('/:id', validateIdParam, tryCatchMiddleware(userController.getUserById));
router.delete('/:id', validateIdParam, tryCatchMiddleware(userController.deleteUser))
router.patch('/:id', validateIdParam, validateUpdateUserProfile, tryCatchMiddleware(userController.updateUser));

module.exports = router;
