const {StatusCodes} = require('http-status-codes');
const {sendSuccess, sendError} = require('../utils/response');

class BaseController {

    constructor(service, resourceName, resourceNamePlural) {
        this.service = service;
        this.resourceName = resourceName;
        this.resourceNamePlural = resourceNamePlural || `${resourceNamePlural}s`;
    }

    create = async (req, res) => {
        try{
            const response = await this.service.create(req.body);
            sendSuccess(res, StatusCodes.CREATED, response, 'created', this.resourceName);
        }catch(error){
            console.log(error);
            sendError(res, StatusCodes.INTERNAL_SERVER_ERROR, error, 'create', this.resourceName);
        }
    }

    get = async (req, res) => {
        try{
            const response = await this.service.findById(req.params.id);
            sendSuccess(res, StatusCodes.OK, response, 'fetched', this.resourceName);
        }catch(error){
            console.log(error);
            sendError(res, StatusCodes.INTERNAL_SERVER_ERROR, error, 'fetch', this.resourceName);
        }
    }

    getAll = async (req, res) => {
        try{
            const response = await this.service.findAll();
            sendSuccess(res, StatusCodes.OK, response, 'fetched', this.resourceNamePlural, true);
        }catch(error){
            console.log(error);
            sendError(res, StatusCodes.INTERNAL_SERVER_ERROR, error, 'fetch', this.resourceNamePlural, true);
        }
    }

    update = async (req, res) => {
        try{
            const response = await this.service.update(req.params.id, req.body);
            sendSuccess(res, StatusCodes.OK, response, 'updated', this.resourceName);
        }catch(error){
            console.log(error);
            sendError(res, StatusCodes.INTERNAL_SERVER_ERROR, error, 'update', this.resourceName);
        }
    }

    delete = async (req, res) => {
        try{
            const response = await this.service.delete(req.params.id);
            sendSuccess(res, StatusCodes.OK, response, 'deleted', this.resourceName);
        }catch(error){
            console.log(error);
            sendError(res, StatusCodes.INTERNAL_SERVER_ERROR, error, 'delete', this.resourceName);
        }
    }
}

module.exports = BaseController;