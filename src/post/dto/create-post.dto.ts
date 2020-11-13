import { PostCategory } from '../enums'
import {IsString, IsBoolean} from 'class-validator'

export class CreatePostDto {
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