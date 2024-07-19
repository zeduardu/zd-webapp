import { Post } from 'src/entities/post.entity';
import { PostRequestDto } from '../post.request.dto';
import { PostResponseDto } from '../post.response.dto';

export class PostMapper {
  static toResponseDto(post: Post): PostResponseDto {
    return {
      id: post.id,
      title: post.title,
      summary: post.summary,
      content: post.content,
      publishedAt: post.publishedAt,
      updatedAt: post.updatedAt,
      url: post.url,
    };
  }

  static toEntity(postRequestDto: PostRequestDto): Post {
    return new Post({
      title: postRequestDto.title,
      summary: postRequestDto.summary,
      content: postRequestDto.content,
      publishedAt: new Date(),
      updatedAt: new Date(),
      url: '',
    });
  }

  static toUpdatedEntity(post: Post, postRequestDto: PostRequestDto): Post {
    return new Post({
      ...post,
      title: postRequestDto.title,
      summary: postRequestDto.summary,
      content: postRequestDto.content,
      updatedAt: new Date(),
    });
  }
}
