import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('posts')

export class PostEntity {
    @PrimaryGeneratedColumn('uuid') id: string;

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
        name: "category_id",
        unsigned:true
       
        })
    category: number;

    @Column({
        default:true
    })
    status: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @Column({
        type: "datetime",
        nullable:true
    })
    updatedAt: string;

}