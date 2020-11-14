import { PostCategory } from '../enums'
import {IsString, IsBoolean, IsNumber, MaxLength, MinLength} from 'class-validator'

export class CreatePostDto {
    @IsString()
    title: string;

    @IsString()
    content: string;

    @IsNumber()
    @MaxLength(22)
    @MinLength(4)
    slug: number;
    
    category?:PostCategory;
    tags?:string[];
    
    @IsBoolean()
    status?:boolean;
  }