import { Module } from '@nestjs/common';
import { RepositoriesModule } from 'src/repositories/repositories.module';
import { WritePostUsecase } from 'src/usecases/write-post/write-post.usecase';
import { WRITE_POST_USECASE } from './write-post/write-post.usecase.interface';

@Module({
  imports: [RepositoriesModule],
  providers: [{ useClass: WritePostUsecase, provide: WRITE_POST_USECASE }],
  exports: [],
})
export class UseCasesModule {}
