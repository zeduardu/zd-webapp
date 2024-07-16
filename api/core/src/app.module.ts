import { Module } from '@nestjs/common';
import { RepositoriesModule } from './repositories/repositories.module';
import { PostService } from './services/post.service';

@Module({
  imports: [RepositoriesModule],
  controllers: [],
  providers: [PostService],
})
export class AppModule {}
