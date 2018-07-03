import { Post } from '../../models';

export interface PostState {
  posts: Post[];
  processed: boolean;
  processing: boolean;
}

export const initialState: PostState = {
  posts: [],
  processed: false,
  processing: false
};
