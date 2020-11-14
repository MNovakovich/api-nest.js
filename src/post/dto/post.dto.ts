import { PostCategory } from '../enums'
import {IsString, IsBoolean} from 'class-validator'

export class PostDto {
    @IsString()
    title: string;

    @IsString()
    content: string;
    slug: string;
    category?:PostCategory;
    tags?:string[];
    
    @IsBoolean()
    status?:boolean;
  }