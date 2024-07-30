import { PostMapper } from './../../dtos/mapper/post.mapper';
import { Inject, Injectable } from '@nestjs/common';
import { PostRequestDto } from 'src/dtos/post.request.dto';
import { PostResponseDto } from 'src/dtos/post.response.dto';
import {
  POST_REPOSITORY,
  PostRepositoryInterface,
} from './../../repositories/post-repository/post.repository.interface';
import { WritePostUsecaseInterface } from './write-post.usecase.interface';

@Injectable()
export class WritePostUsecase implements WritePostUsecaseInterface {
  constructor(
    @Inject(POST_REPOSITORY)
    private readonly postRepository: PostRepositoryInterface,
  ) {}

  async execute(postRequestDto: PostRequestDto): Promise<PostResponseDto> {
    return PostMapper.toResponseDto(
      await this.postRepository.createPost(PostMapper.toEntity(postRequestDto)),
    );
  }
}
