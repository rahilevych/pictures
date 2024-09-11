import { CommentType } from './CommentType';

export type ImageWithComment = {
  id: string;
  saves: number;
  likes: number;
  comments: CommentType[];
};
