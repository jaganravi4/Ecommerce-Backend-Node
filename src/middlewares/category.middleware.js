const {sendValidationError} = require('../utils/response');

const createCategoryValidator = (req, res, next) => {
    const {name, description} = req.body;

    if(!name){
        sendValidationError(res, 'name');
    }

    if(!description){
        sendValidationError(res, 'description');
    }

    next();
}

module.exports = {
    createCategoryValidator,
}