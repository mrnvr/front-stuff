import { PostStoreState } from './post';
import { MemberStoreState } from './member';

export interface RootState {
  members: MemberStoreState.State;
  posts: PostStoreState.State;
}
