import { Module } from '@nestjs/common';
import { PostController } from './controllers/post.controller';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [ServicesModule],
  controllers: [PostController],
  providers: [],
})
export class AppModule {}
