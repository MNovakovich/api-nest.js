import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { Any } from 'typeorm';
import { CreatePostDto } from './dto';

@Controller('posts')
export class PostController {
    @Get('/')
    getMeny() {
        return 'OK !';

    }
    
    @Get(':id')
    getOne(@Param('id') id: string) {
        return {id}
    }
    @Post()
    createOne( @Body() dto:CreatePostDto) {
      
       return {dto}
    }
    @Put(':id')
    editOne(@Param('id') id: string) {

    }
    @Delete(':id')
    deleteOne(@Param('id') id: string) {

    }
}
