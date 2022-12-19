import {
    Column,
    Entity, JoinColumn, OneToMany, OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import {Blog} from "./Blog";
import {Like} from "./Like";
import {Comment} from "./comment";

@Entity({name: "users"})
export class User {
    @PrimaryGeneratedColumn({type: "int"})
    public readonly id: number;
    @Column({type: "varchar"})
    public username: number;
    @Column({type: "varchar"})
    public password: number;
    @OneToMany((_type) => Blog, (blog: Blog) => blog.user)
    public blog?: Blog[];
    @OneToMany((_type)=> Comment, (comment: Comment)=> comment.user)
    public comment: Comment[]
    @OneToOne(() => Like)
    @JoinColumn()
    like: Like
}
