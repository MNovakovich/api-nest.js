import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ){}

    async findAll() {
        return await this.userRepository.find();
    }
 
    async findOne(id: string) {
       return id;
    }

    async create(data) {

        const user = await this.userRepository.create(data);
        await this.userRepository.save(user);
        
        return user;
    }

    async update(id, data) {
        const user = await this.userRepository.findOne({where:{id}});
        if(!user) {
            throw new NotFoundException();
        }

        await this.userRepository.update({id}, data);

        return user;
    }

    //async destroy() {}
}
