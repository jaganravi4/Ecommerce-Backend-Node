const {Category} = require('../models/index');
const BaseRepository = require('./base.repository');

class CategoryRepository extends BaseRepository{
    constructor() {
        super(Category);
    }
}

module.exports = CategoryRepository;