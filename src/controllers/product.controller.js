
const {StatusCodes} = require("http-status-codes");
const {ProductService}= require("../services/index.js");

class ProductController {

    constructor() {
        this.productService = new ProductService();
    }

    get = async (req, res) => {
        try{
            const response = await this.productService.get(req.params.id);
            return res.status(StatusCodes.OK).json({
                success: true,
                message: 'Successfully fetched the product',
                data: response,
                error: {},
            });
        }catch(error){
            console.log(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(
                {
                    success: false,
                    message: 'Not able to fetch the product',
                    data: {},
                    error: error,
                }
            )
        }
    }

    getAll = async (req, res) => {
        try{
            const response = await this.productService.getAll();
            return res.status(StatusCodes.OK).json(
                {
                    success: true,
                    message: "Successfully fetched all products",
                    error: {},
                    data: response,
                }
            );
        }catch(error){
            console.log(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(
                {
                    data: {},
                    success: false,
                    message: "Not able to fetch all products",
                    error
                }
            );
        }
    }
}

module.exports = ProductController;