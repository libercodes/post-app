import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { dbConfig } from './config/database';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      renderPath: '/',
    }),
    TypeOrmModule.forRoot(dbConfig),
    PostsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
