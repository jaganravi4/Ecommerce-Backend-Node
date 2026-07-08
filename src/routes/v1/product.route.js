const express = require('express');

const {ProductController} = require('../../controllers/index');

const router = express.Router();

const productController = new ProductController();

router.post('/', productController.create);
router.get('/', productController.getAll);
router.get('/:id', productController.get);
router.patch('/:id', productController.update);
router.delete('/:id', productController.delete);

module.exports = router;