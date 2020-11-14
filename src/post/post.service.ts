import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {PostDto } from './dto';
import { PostEntity } from './post.entity';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(PostEntity) 
        private postRepository: Repository<PostEntity>
    ) {}

    async showAll() {
       return await this.postRepository.find();
    }

    async read(id:string) {
        const post =  await this.postRepository.findOne({where:{id}});

        if(!post) {
            // 1. optioon
            // throw new HttpException({
            //     status: HttpStatus.NOT_FOUND,
            //     error: 'Not Found',
            //   }, HttpStatus.NOT_FOUND);
            
            // 2. option
            throw new NotFoundException()
           
             // 3. option
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }

        return post;
    }

    async create(data) {
        const post = await this.postRepository.create(data);
        await this.postRepository.save(post);

        return post;
    }

    async update(id:string, data:Partial<PostDto>) {

        const post = await this.postRepository.findOne({where:{ id }});
     
        if(!post) {
         
            //throw new HttpException('Not Found', HttpStatus.NOT_FOUND)
            throw new NotFoundException();
        }
        await this.postRepository.update({id}, data);
        return post;
    }

    async destroy(id:string) {

        const post = await this.postRepository.findOne({where:{ id }});
     
        if(!post) {
            throw new NotFoundException();
        }

        await this.postRepository.delete({id});
        return post;
    }

   
}
