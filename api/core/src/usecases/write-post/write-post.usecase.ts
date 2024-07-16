import { Injectable } from '@nestjs/common';
import { WritePostUsecaseInterface } from './write-post.usecase.interface';
import { PostReponseDto } from 'src/dtos/post.reponse.dto';
import { PostRequestDto } from 'src/dtos/post.request.dto';
import { PostRepositoryInterface } from '../../repositories/post-repository/post.repository.interface';

@Injectable()
export class WritePostUsecase implements WritePostUsecaseInterface {
  constructor(private readonly postRepository: PostRepositoryInterface) {}

  execute(postRequestDto: PostRequestDto): Promise<PostReponseDto> {
    return null;
  }
}
