
const {StatusCodes} = require("http-status-codes");
const {ProductService}= require("../services/index.js");

class ProductController {

    constructor() {
        this.productService = new ProductService();
    }

    getAll = async (req, res) => {
        try{
            const response = await this.productService.getAll();
            return res.status(StatusCodes.OK).json(
                {
                    success: true,
                    message: "Successfully fetched all the products",
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
                    message: "Something went wrong",
                    error
                }
            );
        }
    }
}

module.exports = ProductController;