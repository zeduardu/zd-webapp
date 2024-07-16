export class Post {
  id: string;
  url: string;
  title: string;
  summary: string | null;
  content: string;
  publishedAt: Date;
  updatedAt: Date;

  constructor(props: {
    id?: string;
    url: string;
    title: string;
    summary?: string | null;
    content: string;
    publishedAt: Date;
    updatedAt: Date;
  }) {
    Object.assign(this, props);
  }
}
