const {ProductService}= require("../services/index.js");
const BaseController = require('./base.controller');

const productService = new ProductService();

class ProductController extends BaseController{

    constructor() {
        super(productService, 'product');
    }
}

module.exports = ProductController;