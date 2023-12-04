const express = require('express');
const router = express.Router();
const ImageController = require('../controllers/image.controller');
const imageController = new ImageController();

router.get('/', imageController.generateImage);

module.exports = router;