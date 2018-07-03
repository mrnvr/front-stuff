import * as members from './member.reducer';
import * as posts from './post.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state';

export const reducers: ActionReducerMap<AppState> = {
  members: members.membersReducer,
  posts: posts.postReducer
};

export * from './post.reducer';
export * from './member.reducer';
