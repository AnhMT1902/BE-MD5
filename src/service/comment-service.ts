import {AppDataSource} from "../data-source";
import {Comment} from "../model/comment";

export class CommentService {
    private commentRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.commentRepository = connection.getRepository(Comment)
            console.log('Connect Db success')
        })

    }
}