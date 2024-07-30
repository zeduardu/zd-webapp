import { UseCasesModule } from 'src/usecases/use-cases.module';
import { Module } from '@nestjs/common';
import { PostService } from './post.service';

@Module({
  imports: [UseCasesModule],
  providers: [PostService],
  exports: [PostService],
})
export class ServicesModule {}
