export class PostResponseDto {
  id: string;
  url: string;
  title: string;
  summary: string | null;
  content: string;
  publishedAt: Date;
  updatedAt: Date;
}
