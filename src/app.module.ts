import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './config/database';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig),
    PostsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
