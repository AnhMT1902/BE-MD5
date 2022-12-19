import {AppDataSource} from "../data-source";
import {Like} from "../model/Like";


export class LikeService {
    private likeRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.likeRepository = connection.getRepository(Like)
            console.log('Connect Db success')
        })
    }
}