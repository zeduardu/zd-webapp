export const WRITE_POST_USECASE = 'WRITE POST USE CASE';

import { PostRequestDto } from '../../dtos/post.request.dto';
import { PostResponseDto } from '../../dtos/post.response.dto';

export interface WritePostUsecaseInterface {
  execute(postRequestDto: PostRequestDto): Promise<PostResponseDto>;
}
