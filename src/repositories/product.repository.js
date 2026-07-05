const axios = require('axios');

class ProductRepository {

    async getAll() {
        try{
            const response = await axios.get('http://fakestoreapi.com/products');
            return response.data;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
}

module.exports = ProductRepository;