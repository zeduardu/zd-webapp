import { Module } from '@nestjs/common';
import { PostRepository } from './post-repository/post.repository';

@Module({
  providers: [PostRepository],
})
export class RepositoriesModule {}
