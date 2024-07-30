export const POST_REPOSITORY = 'IPostRepository';

import { Post } from '../../entities/post.entity';

export interface PostRepositoryInterface {
  createPost(data: Post): Promise<Post>;
  getPostById(id: number): Promise<Post>;
  updatePost(id: number, data: Post): Promise<Post>;
  deletePost(id: number): Promise<Post>;
  getAllPosts(): Promise<Post[]>;
}
