const express = require('express');
const productRouter = require('./product.route');
const categoryRouter = require('./category.route');

const router = express.Router();

router.use('/products', productRouter);
router.use('/categories', categoryRouter);

module.exports = router;