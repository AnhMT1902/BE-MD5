import {
    Column,
    Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn,
} from "typeorm";
import {Blog} from "./Blog";
import {User} from "./User";

@Entity({name: 'likes'})
export class Like {
    @PrimaryGeneratedColumn({type: 'int'})
    public readonly id: number;
    @ManyToOne((_type) => Blog, (blog: Blog) => blog.id)
    public blog: Blog;
    @OneToOne(()=> User)
    @JoinColumn()
    user: User
}