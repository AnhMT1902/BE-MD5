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

    login = async (user) => {
        return await this.userRepository.findOneBy(user);
    }
    getAll = async () => {
         return await this.userRepository.find()
    }

    editAccount = async (id) => {
        return await this.userRepository.findOneById(id)
    }

}

export default new UserService();