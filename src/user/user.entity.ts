import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
export class UserEntity {
 
    @PrimaryGeneratedColumn()
    id: string;


    @Column()
    firstName:string;

    @Column({
        length:180
    })
    lastName:string;

    @Column({
        unique:true
    })
    email:string;

    @Column()
    password: string;
    
    @Column()
    role:number;

    @DeleteDateColumn()
    deleted: string
    
    
}