import { Test, TestingModule } from '@nestjs/testing';
import { PostRepository } from './post.repository';
import { Post } from '../../entities/post.entity';

describe('PostRepository', () => {
  let repository: PostRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostRepository],
    }).compile();

    repository = module.get<PostRepository>(PostRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('Create a post', async () => {
    const post = new Post({
      url: 'https://www.example.com',
      title: 'Example',
      summary: 'Example',
      content: 'Example',
      publishedAt: new Date(),
      updatedAt: new Date(),
    });
    const newPost = await repository.createPost(post);
    expect(newPost).toReturn();
  });
});
