import { CreatePostDto } from './dto';
import { PostService } from './post.service';
export declare class PostController {
    private postService;
    constructor(postService: PostService);
    showAllPosts(): string;
    getOne(id: string): {
        id: string;
    };
    createOne(dto: CreatePostDto): {
        dto: CreatePostDto;
    };
    editOne(id: string): void;
    deleteOne(id: string): void;
}
