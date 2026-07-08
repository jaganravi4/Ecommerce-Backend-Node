const express = require('express');

const { CategoryController } = require('../../controllers/index');
const { createCategoryValidator} = require('../../middlewares/category.middleware');

const router = express.Router();
const categoryController = new CategoryController();

router.post('/',
    createCategoryValidator,
    categoryController.create);
router.get('/:id', categoryController.get);
router.get('/', categoryController.getAll);
router.patch('/:id', categoryController.update);
router.delete('/:id', categoryController.delete);

module.exports = router;
