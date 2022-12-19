import {AppDataSource} from "../data-source";
import {Request, Response} from "express";
import {User} from "../model/User";

class UserService {
    private userRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.userRepository = connection.getRepository(User)
            console.log('Connect Db success')
        })
    }

    register = async () => {
        return await this.userRepository.find()

    }
    login = async () => {
    }
    getAll = async () => {

    }
}

export default new UserService();