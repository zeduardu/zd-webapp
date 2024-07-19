import { Injectable } from '@nestjs/common';
import { PostMapper } from 'src/dtos/mapper/post.mapper';
import { PostRequestDto } from 'src/dtos/post.request.dto';
import { PostResponseDto } from 'src/dtos/post.response.dto';
import { PostRepositoryInterface } from '../../repositories/post-repository/post.repository.interface';
import { WritePostUsecaseInterface } from './write-post.usecase.interface';

@Injectable()
export class WritePostUsecase implements WritePostUsecaseInterface {
  constructor(private readonly postRepository: PostRepositoryInterface) {}

  async execute(postRequestDto: PostRequestDto): Promise<PostResponseDto> {
    return PostMapper.toResponseDto(
      await this.postRepository.createPost(PostMapper.toEntity(postRequestDto)),
    );
  }
}
