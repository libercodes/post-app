import {
  IsInt, IsString, Length
} from 'class-validator';

export class CreatePostDto {
  @IsString()
  @Length(1, 255)
  body: string;

  @IsString()
  @Length(1, 50)
  title: string;

  @IsInt()
  userId: number;
}
