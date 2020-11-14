import { PostCategory } from '../enums';
export declare class CreatePostDto {
    title: string;
    content: string;
    slug: string;
    category?: PostCategory;
    tags?: string[];
    status?: boolean;
}
