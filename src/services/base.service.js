class BaseService {

    constructor(repository) {
        this.repository = repository;
    }

    async create(data) {
        try{
            return await this.repository.create(data);
        }catch(error){
            console.log("Something went wrong in base service");
            throw error;
        }
    }

    async findById(id) {
        try{
            return await this.repository.get(id);
        }catch (error){
            console.log("Something went wrong in base service");
            throw error;
        }
    }

    async findAll() {
        try{
            return await this.repository.getAll();
        }catch (error){
            console.log("Something went wrong in base service");
            throw error;
        }
    }

    async update(id, data) {
        try{
            return await this.repository.update(id, data);
        }catch (error){
            console.log("Something went wrong in base service");
            throw error;
        }
    }

    async delete(id) {
        try{
            return await this.repository.delete(id);
        }catch (error){
            console.log("Something went wrong in base service");
            throw error;
        }
    }
}

module.exports = BaseService;