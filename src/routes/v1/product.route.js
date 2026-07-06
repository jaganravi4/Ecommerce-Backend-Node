const express = require('express');

const {ProductController} = require('../../controllers/index');

const router = express.Router();

const productController = new ProductController();

router.get('/', productController.getAll);
router.get('/:id', productController.get);

module.exports = router;