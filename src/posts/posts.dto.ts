import {
  IsInt, IsNotEmpty, IsString, Length
} from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  body: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  title: string;

  @IsInt()
  userId: number;
}
