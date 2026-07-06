const axios = require('axios');
const {FAKE_STORE_URL} = require("../config/server.config");

class ProductRepository {

    async get(id){
        try{
            const response = await axios.get(`${FAKE_STORE_URL}/products/${id}`);
            return response.data;
        }catch(error){
            console.log(error);
            throw error;
        }
    }

    async getAll() {
        try{
            const response = await axios.get(`${FAKE_STORE_URL}/products`);
            return response.data;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
}

module.exports = ProductRepository;