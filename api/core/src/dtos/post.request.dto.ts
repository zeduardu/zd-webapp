import { IsNotEmpty } from 'class-validator';

export class PostRequestDto {
  @IsNotEmpty()
  title: string;
  summary: string | null;
  @IsNotEmpty()
  content: string;
}
