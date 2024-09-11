import { UserType } from './UserType';

export type CommentType = {
  id: string;
  user: UserType;
  date: Date;
  text: string;
};
