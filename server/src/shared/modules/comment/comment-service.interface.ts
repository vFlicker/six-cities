import { CommentDocument } from './comment.entity.js';
import { CreateCommentDto } from './dto/create-comment.dto.js';

export interface CommentService {
  create(dto: CreateCommentDto): Promise<CommentDocument>;
  findAllByOfferId(id: string): Promise<CommentDocument[]>;
}
