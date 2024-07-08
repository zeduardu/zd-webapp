import { Post } from "./post";
import { User } from "./user";

export interface Comment {
  id: string;
  article: Post;
  user: User;
  content: string;
  commentDate: Date;
}
