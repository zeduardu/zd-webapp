import { PostController } from './controllers/post.controller';
import { Module } from '@nestjs/common';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [ServicesModule],
  controllers: [PostController],
  providers: [],
})
export class AppModule {}
