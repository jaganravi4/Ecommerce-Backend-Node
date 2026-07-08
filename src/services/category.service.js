const {CategoryRepository} = require('../repositories/index');
const BaseService = require('./base.service');

const categoryRepository = new CategoryRepository();

class CategoryService extends BaseService {

    constructor() {
        super(categoryRepository);
    }
}

module.exports = CategoryService;