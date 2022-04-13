import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

dotenv.config();

export const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.POSTGRES_DB_URL,
  synchronize: true,
  ssl: false,
  entities: [`${__dirname}/../**/*.entity.{ts,js}`],
  namingStrategy: new SnakeNamingStrategy()
};
