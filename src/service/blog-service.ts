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

    getAll = async () => {
        return await this.blogRepository.find()
    }


}

export default new BlogService