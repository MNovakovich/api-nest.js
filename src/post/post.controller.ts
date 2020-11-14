import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { Any } from 'typeorm';
import { CreatePostDto, PostDto } from './dto';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
    constructor(private postService: PostService) {

    }
    @Get('/')
    showAllPosts() {
        return this.postService.showAll()

    }
    
    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.postService.read(id)
    }
    @Post()
    createOne( @Body() data:CreatePostDto) {
      
       return this.postService.create(data);
    }

    @Put(':id')
    editOne(@Param('id') id: string, @Body() data: Partial<PostDto>) {
        return this.postService.update(id, data);

    }
    @Delete(':id')
    deleteOne(@Param('id') id: string) {

        return this.postService.destroy(id);

    }
}
