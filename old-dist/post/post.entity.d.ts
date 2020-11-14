import { PostCategory } from './enums';
export declare class PostEntity {
    id: string;
    title: string;
    content: string;
    slug: string;
    category: PostCategory;
    status: boolean;
    createdAt: Date;
    updatedAt: string;
}
