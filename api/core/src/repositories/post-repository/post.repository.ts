import { Injectable } from '@nestjs/common';
import { Post } from '../../entities/post.entity';
import { PrismaRepository } from '../prisma.repository';
import { PostRepositoryInterface } from './post.repository.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PostRepository
  extends PrismaRepository
  implements PostRepositoryInterface
{
  async createPost(data: Post): Promise<Post> {
    const post = await this.post.create({
      data: {
        id: uuidv4(),
        url: data.url,
        title: data.title,
        summary: data.summary,
        content: data.content,
        publishedAt: data.publishedAt,
        updatedAt: data.updatedAt,
      },
    });
    const newPost: Post = { ...post };
    return Promise.resolve(newPost);
  }

  deletePost(id: number): Promise<Post> {
    return Promise.resolve(undefined);
  }

  getAllPosts(): Promise<Post[]> {
    return Promise.resolve([]);
  }

  getPostById(id: number): Promise<Post> {
    return Promise.resolve(undefined);
  }

  updatePost(id: number, data: Post): Promise<Post> {
    return Promise.resolve(undefined);
  }
}
