import { Injectable } from '@nestjs/common';
import { WritePostUsecaseInterface } from '../usecases/write-post/write-post.usecase.interface';

@Injectable()
export class PostService {
  constructor(private readonly writePostUsecase: WritePostUsecaseInterface) {}
}
