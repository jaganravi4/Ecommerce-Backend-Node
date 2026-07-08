const {StatusCodes} = require("http-status-codes");

const {CategoryService} = require('../services/index');
const {sendSuccess, sendError} = require('../utils/response');

class CategoryController {

    constructor(){
        this.categoryService = new CategoryService();
    }

    create = async (req, res) => {
        try{
            const response = await this.categoryService.create(req.body);
            sendSuccess(res, StatusCodes.CREATED, response, 'created', 'category');
        }catch(error){
            console.log(error);
            sendError(res, StatusCodes.INTERNAL_SERVER_ERROR, error, 'create', 'category');
        }
    }

    get = async (req, res) => {
        try{
            const response = await this.categoryService.findById(req.params.id);
            sendSuccess(res, StatusCodes.OK, response, 'fetched', 'category');
        }catch(error){
            console.log(error);
            sendError(res, StatusCodes.INTERNAL_SERVER_ERROR, error, 'fetch', 'category');
        }
    }

    getAll = async (req, res) => {
        try{
            const response = await this.categoryService.findAll();
            sendSuccess(res, StatusCodes.OK, response, 'fetched', 'categories', true);
        }catch(error){
            console.log(error);
            sendError(res, StatusCodes.INTERNAL_SERVER_ERROR, error, 'fetch', 'categories', true);
        }
    }

    update = async (req, res) => {
        try{
            const response = await this.categoryService.update(req.params.id, req.body);
            sendSuccess(res, StatusCodes.OK, response, 'updated', 'category');
        }catch(error){
            console.log(error);
            sendError(res, StatusCodes.INTERNAL_SERVER_ERROR, error, 'update', 'category');
        }
    }

    delete = async (req, res) => {
        try{
            const response = await this.categoryService.delete(req.params.id);
            sendSuccess(res, StatusCodes.OK, response, 'deleted', 'category');
        }catch(error){
            console.log(error);
            sendError(res, StatusCodes.INTERNAL_SERVER_ERROR, error, 'delete', 'category');
        }
    }
}

module.exports = CategoryController;