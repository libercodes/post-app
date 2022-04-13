import { Exclude } from 'class-transformer';
import {
  BaseEntity,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn
} from 'typeorm';

export abstract class BaseModel extends BaseEntity {
  @Exclude()
  @DeleteDateColumn()
  deletedAt: Date;

  @Exclude()
  @UpdateDateColumn()
  updatedAt: Date;

  @Exclude()
  @CreateDateColumn()
  createdAt: Date;
}
