import {
    Column,
    Entity, ManyToOne, PrimaryGeneratedColumn,
} from "typeorm";
import {Blog} from "./Blog";
import {User} from "./User";

@Entity({name: 'comments'})
export class Comment {
    @PrimaryGeneratedColumn({type: 'int'})
    public readonly id: number;
    @Column({type: 'text'})
    public content: string
    @ManyToOne((_type) => Blog, (blog: Blog) => blog.id)
    public blog!: Blog;
    @ManyToOne((_type) => User, (user: User) => user.id)
    public user!: User;
}