class BaseRepository {

    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try{
            return await this.model.create(data);
        }catch (error){
            console.log('Something went wrong in base repository');
            throw error;
        }
    }

    async get(id) {
        try{
            return await this.model.findByPk(id);
        }catch (error){
            console.log('Something went wrong in base repository');
            throw error;
        }
    }

    async getAll() {
        try{
            return await this.model.findAll();
        }catch (error){
            console.log('Something went wrong in base repository');
            throw error;
        }
    }

    async update(id, data) {
        try{
            return await this.model.update(data, {
                where: {
                    id: id,
                }
            });
        }catch (error){
            console.log('Something went wrong in base repository');
            throw error;
        }
    }

    async delete(id) {
        try{
            await this.model.destroy({
                where: {
                    id: id
                }
            });
            return true;
        }catch (error){
            console.log('Something went wrong in base repository');
            throw error;
        }
    }
}

module.exports = BaseRepository;