const {ProductRepository} = require('../repositories/index');

class ProductService {

    constructor() {
        this.productRepository = new ProductRepository();
    }

    async get(id){
        try{
            return await this.productRepository.get(id);
        }catch(error){
            console.log(error);
            throw error;
        }
    }

    async getAll(){
        try{
            return await this.productRepository.getAll();
        }catch (error){
            console.log(error);
            throw error;
        }
    }
}

module.exports = ProductService;