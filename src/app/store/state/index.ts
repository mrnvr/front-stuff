import * as posts from './post.state';
import * as members from './member.state';

export interface AppState {
  members: members.MemberState;
  posts: posts.PostState;
}

export const initialState: AppState = {
  members: members.initialState,
  posts: posts.initialState
};
