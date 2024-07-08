import { Category } from "./category";
import { User } from "./user";

export interface Post {
  id: string;
  user: User;
  url: string;
  title: string;
  summary: string
  content: string;
  publicationDate: Date;
  modificationDate: Date;
  categories: Category[];
}
