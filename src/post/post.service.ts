import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {PostDto, CreatePostDto } from './dto';
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
        return await this.postRepository.findOne({where:{id}});
    }

    async create(data:CreatePostDto) {
        const post = await this.postRepository.create(data);
        await this.postRepository.save(post);

        return post;
    }

    async update(id:string, data:Partial<PostDto>) {
        await this.postRepository.update({id}, data);
        return await this.postRepository.findOne({id});
    }

    async destroy(id:string) {
        await this.postRepository.delete({id});

        return { deleted:true}
    }

   
}
