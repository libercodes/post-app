import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseInterceptors
} from '@nestjs/common';
import { ResponseInterceptor } from 'src/helpers/response.interceptor';
import { Post as PostEntity } from 'src/models/post.entity';
import { CreatePostDto } from './posts.dto';
import { PostsService } from './posts.service';

@Controller('posts')
@UseInterceptors(ResponseInterceptor, ClassSerializerInterceptor)
export class PostsController {
  constructor(
    private readonly postService: PostsService,
  ) { }

  @Post()
  public async create(@Body() dto: CreatePostDto): Promise<PostEntity> {
    return this.postService.create(dto);
  }

  @Get('/:id')
  public async getOne(@Param('id', ParseIntPipe) id: number): Promise<PostEntity> {
    return this.postService.getOne(id);
  }
}
