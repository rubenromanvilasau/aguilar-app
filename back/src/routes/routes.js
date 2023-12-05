const express = require('express');
const router = express.Router();
const ImageController = require('../controllers/image.controller');
const UserController = require('../controllers/user.controller');
const imageController = new ImageController();
const userController = new UserController();

router.get('/', imageController.generateImage);
router.post('/users/', userController.saveUser);

module.exports = router;