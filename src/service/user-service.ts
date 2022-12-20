import {AppDataSource} from "../data-source";
import {Request, Response} from "express";
import {User} from "../model/User";
import bcrypt from 'bcrypt';

class UserService {
    private userRepository: any;
    constructor() {
        AppDataSource.initialize().then(connection => {
            this.userRepository = connection.getRepository(User)
            console.log('Connect Db success')
        })
    }

    findAll = async () => {
        return await this.userRepository.find()
    }

    save = async (user) => {
        let userFind = await this.userRepository.findOneBy({username: user.username})
        if (!userFind) {
            user.password = await bcrypt.hash(user.password, 10)
            return await this.userRepository.save(user)
        } else {

            return {
                message: "has the same name"
            }
        }
    }

    login = async (username) => {
        console.log(username);
        let query = `select * from users where username = '${username}'`
        return (await this.userRepository.query(query))[0];
    }

    deleteUser = async (id) => {
        const query = `DELETE FROM user WHERE id = ` + id;
        return await this.userRepository.query(query)
    }

}

export default new UserService();