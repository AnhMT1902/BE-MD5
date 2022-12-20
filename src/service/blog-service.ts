import {Blog} from "../model/Blog";
import {AppDataSource} from "../data-source";

class BlogService {
    private blogRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.blogRepository = connection.getRepository(Blog)
            console.log('Connect Db success')
        })
    }

    getAll = async (data) => {
        return await this.blogRepository.find(data)
    }


}

export default new BlogService