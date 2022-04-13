import { IsInt } from 'class-validator';

export class IdParamRequired {
  @IsInt()
  id: number;
}
