import { Inject, Injectable } from '@nestjs/common';
import { WritePostUsecaseInterface } from '../usecases/write-post/write-post.usecase.interface';
import { PostRequestDto } from 'src/dtos/post.request.dto';
import { PostResponseDto } from 'src/dtos/post.response.dto';

@Injectable()
export class PostService {
  constructor(
    @Inject('WritePostUsecaseInterface')
    private readonly writePostUsecase: WritePostUsecaseInterface,
  ) {}

  async writePost(postRequestDto: PostRequestDto): Promise<PostResponseDto> {
    return await this.writePostUsecase.execute(postRequestDto);
  }
}
