const express = require('express');
const router = express.Router();
const ImageController = require('../controllers/image.controller');
const UserController = require('../controllers/user.controller');
const imageController = new ImageController();
const userController = new UserController();

router.get('/images/:id', imageController.getImage);
router.post('/users/', userController.saveUser);
router.post('/images/', imageController.saveImage);

module.exports = router;