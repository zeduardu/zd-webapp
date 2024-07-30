import { RepositoriesModule } from './../repositories/repositories.module';
import { Module } from '@nestjs/common';
import { WritePostUsecase } from 'src/usecases/write-post/write-post.usecase';
import { WRITE_POST_USECASE } from './write-post/write-post.usecase.interface';

@Module({
  imports: [RepositoriesModule],
  providers: [{ useClass: WritePostUsecase, provide: WRITE_POST_USECASE }],
  exports: [{ useClass: WritePostUsecase, provide: WRITE_POST_USECASE }],
})
export class UseCasesModule {}
