const {StatusCodes} = require("http-status-codes");

const {ProductService}= require("../services/index.js");
const {sendSuccess, sendError} = require('../utils/response');

class ProductController {

    constructor() {
        this.productService = new ProductService();
    }

    create = async (req, res) => {
        try{
            const response = await this.productService.create(req.body);
            sendSuccess(res, StatusCodes.CREATED, response, 'created', 'product');
        }catch(error){
            console.log(error);
            sendError(res, StatusCodes.INTERNAL_SERVER_ERROR, error, 'create', 'product');
        }
    }

    get = async (req, res) => {
        try{
            const response = await this.productService.get(req.params.id);
            sendSuccess(res, StatusCodes.OK, response, 'fetched', 'product');
        }catch(error){
            console.log(error);
            sendError(res, StatusCodes.INTERNAL_SERVER_ERROR, error, 'fetch', 'product');
        }
    }

    getAll = async (req, res) => {
        try{
            const response = await this.productService.getAll();
            sendSuccess(res, StatusCodes.OK, response, 'fetched', 'products', true);
        }catch(error){
            console.log(error);
            sendError(res, StatusCodes.INTERNAL_SERVER_ERROR, error, 'fetch', 'products');
        }
    }

    update = async (req, res) => {
        try{
            const response = await this.productService.update(req.params.id, req.body);
            sendSuccess(res, StatusCodes.OK, response, 'updated', 'product');
        }catch(error){
            console.log(error);
            sendError(res, StatusCodes.INTERNAL_SERVER_ERROR, error, 'update', 'product');
        }
    }

    delete = async (req, res) => {
        try{
            const response = await this.productService.delete(req.params.id);
            sendSuccess(res, StatusCodes.OK, response, 'deleted', 'product');
        }catch(error){
            console.log(error);
            sendError(res, StatusCodes.INTERNAL_SERVER_ERROR, error, 'delete', 'product');
        }
    }
}

module.exports = ProductController;