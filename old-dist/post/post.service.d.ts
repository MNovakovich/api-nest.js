import { Repository } from 'typeorm';
import { PostDto, CreatePostDto } from './dto';
import { PostEntity } from './post.entity';
export declare class PostService {
    private postRepository;
    constructor(postRepository: Repository<PostEntity>);
    showAll(): Promise<PostEntity[]>;
    read(id: string): Promise<PostEntity>;
    create(data: CreatePostDto): Promise<PostEntity>;
    update(id: string, data: Partial<PostDto>): Promise<PostEntity>;
    destroy(id: string): Promise<{
        deleted: boolean;
    }>;
}
