import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";
import {Comment} from "./comment";
import {Like} from "./Like";

@Entity({name: 'blogs'})
export class Blog {
    @PrimaryGeneratedColumn({type: 'int'})
    public readonly id: number;
    @Column({type: 'varchar'})
    public title: string;
    @Column({type: 'varchar'})
    public content: string;
    @Column({type: 'varchar'})
    public creatTime: Date;
    @ManyToOne((_type) => User, (user: User) => user.id)
    public user: User;
    @OneToMany((_type) => Comment, (comment: Comment) => comment.blog)
    public comment: Comment[]
    @OneToMany((_type) => Like, (like: Like) => like.blog)
    public like: Like[]
}