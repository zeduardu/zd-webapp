import { Module } from '@nestjs/common';
import { PostRepository } from './post-repository/post.repository';
import { POST_REPOSITORY } from './post-repository/post.repository.interface';

@Module({
  providers: [{ useClass: PostRepository, provide: POST_REPOSITORY }],
  exports: [{ useClass: PostRepository, provide: POST_REPOSITORY }],
})
export class RepositoriesModule {}
