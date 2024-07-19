import { Module } from '@nestjs/common';
import { UseCasesModule } from 'src/usecases/use-cases.module';
import { WritePostUsecase } from './../usecases/write-post/write-post.usecase';
import { WRITE_POST_USECASE } from './../usecases/write-post/write-post.usecase.interface';
import { PostService } from './post.service';

@Module({
  imports: [UseCasesModule],
  providers: [
    PostService,
    { useClass: WritePostUsecase, provide: WRITE_POST_USECASE },
  ],
  exports: [PostService],
})
export class ServicesModule {}
