import { PostRequestDto } from '../../dtos/post.request.dto';
import { PostReponseDto } from '../../dtos/post.reponse.dto';

export interface WritePostUsecaseInterface {
  execute(postRequestDto: PostRequestDto): Promise<PostReponseDto>;
}
