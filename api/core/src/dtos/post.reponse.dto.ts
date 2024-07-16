export class PostReponseDto {
  id: bigint;
  url: string;
  title: string;
  summary: string | null;
  content: string;
  publishedAt: Date;
  updatedAt: Date;s
}
