import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { PostCategory } from './enums';

@Entity('posts')

export class PostEntity {
    @PrimaryGeneratedColumn()
     id: string;

    @Column()
    title: string;

    @Column({
        nullable:true
    })
    content: string;

    @Column({ 
        type: "varchar",
        length: 180,
     //   unique: true
        })
    slug: string;

    @Column({ 
        type: "enum",
        enum: [PostCategory.CODING, PostCategory.LIFESTILE, PostCategory.TEHNOLOGY],
        //unsigned:true
       
        })
    category: PostCategory;

    @Column({
        default:true
    })
    status: boolean;

    @CreateDateColumn()
    createdAt: string;

    @Column({
        type: "datetime",
        nullable:true
    })
    updatedAt: string;

}