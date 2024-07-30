import { Inject, Injectable } from '@nestjs/common';
import { PostRequestDto } from 'src/dtos/post.request.dto';
import { PostResponseDto } from 'src/dtos/post.response.dto';
import {
  WRITE_POST_USECASE,
  WritePostUsecaseInterface,
} from './../usecases/write-post/write-post.usecase.interface';

@Injectable()
export class PostService {
  constructor(
    @Inject(WRITE_POST_USECASE)
    private readonly writePostUseCase: WritePostUsecaseInterface,
  ) {}

  async writePost(postRequestDto: PostRequestDto): Promise<PostResponseDto> {
    return await this.writePostUseCase.execute(postRequestDto);
  }
}
