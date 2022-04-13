import { Injectable } from '@nestjs/common';
import { Post } from 'src/models/post.entity';
import { PostRepository } from 'src/repositories/post.repository';
import { CreatePostDto } from './posts.dto';

@Injectable()
export class PostsService {
  constructor(
    private readonly postRepo: PostRepository,
  ) { }

  public async getOne(id: number): Promise<Post> {
    const obj = await this.postRepo.findOne(id);
    return obj;
  }

  public async create(dto: CreatePostDto): Promise<Post> {
    const obj = await this.postRepo.create(dto).save();
    return obj;
  }
}
