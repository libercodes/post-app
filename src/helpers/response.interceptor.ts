import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Type as NestType,
  Logger
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { plainToClassFromExist, Type } from 'class-transformer';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface Metadata {
  totalPages: number
  totalItems: number
  itemsPerPage: number
  currentPage: number
}

export class Paginated<T> {
  // eslint-disable-next-line
  constructor(private type?: Function) {}

  @Type((options) => (options.newObject as Paginated<T>).type)
  rows: T[];

  metadata: Metadata;
}

export class Response<T> {
  status: boolean;

  message?: string;

  data: T;
}

@Injectable()
export class ResponseInterceptor<T>
implements NestInterceptor<T, Response<T>> {
  private readonly logger = new Logger('RES');

  constructor(
    private readonly reflector: Reflector
  ) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    const Type = this.reflector.get<any>('Type', context.getHandler());
    return next
      .handle()
      .pipe(
        map((data) => ({
          status: true,
          message: 'Ok',
          data: Type ? plainToClassFromExist(new Paginated<NestType>(Type), data) : data
        })),
        tap((payload) => {
          this.logger.debug(`${JSON.stringify(payload.data, null, 2)}`);
        })
      );
  }
}
