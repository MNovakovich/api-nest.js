import { PostCategory } from '../enums';
export declare class PostDto {
    title: string;
    content: string;
    slug: string;
    category?: PostCategory;
    tags?: string[];
    status?: boolean;
}
