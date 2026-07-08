const {ProductRepository} = require('../repositories/index');
const BaseService = require('./base.service');

const productRepository = new ProductRepository();

class ProductService extends BaseService {
    constructor() {
        super(productRepository);
    }
}

module.exports = ProductService;