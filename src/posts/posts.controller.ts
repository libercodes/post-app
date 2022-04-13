import { Controller, Get, Post } from '@nestjs/common';
import { IdParamRequired } from 'src/helpers/dto';
import { Post as PostEntity } from 'src/models/post.entity';
import { CreatePostDto } from './posts.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly postService: PostsService,
  ) { }

  @Post('/posts')
  public async create(dto: CreatePostDto): Promise<PostEntity> {
    return this.postService.create(dto);
  }

  @Get('/posts/:id')
  public async getOne({ id }: IdParamRequired): Promise<PostEntity> {
    return this.postService.getOne(id);
  }
}
