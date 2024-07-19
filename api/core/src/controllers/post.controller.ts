import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { PostRequestDto } from 'src/dtos/post.request.dto';
import { PostResponseDto } from 'src/dtos/post.response.dto';
import { PostService } from 'src/services/post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @HttpCode(201)
  async writePost(
    @Body() postRequestDto: PostRequestDto,
  ): Promise<PostResponseDto> {
    return await this.postService.writePost(postRequestDto);
  }
}
