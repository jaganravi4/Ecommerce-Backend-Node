const {CategoryService} = require('../services/index');
const BaseController = require('./base.controller');

const categoryService = new CategoryService();

class CategoryController extends BaseController {

    constructor(){
        super(categoryService, 'category', 'categories');
    }
}

module.exports = CategoryController;