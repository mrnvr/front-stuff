import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getPosts, getPostsLoaded, getPostsLoading } from '../reducers';
import { PostState } from '../state/post.state';
import { MemoizedSelector } from '@ngrx/store/src/selector';
import { Post } from '../../models';

export const selectPostState: MemoizedSelector<object, PostState> = createFeatureSelector<PostState>('posts');
export const selectPosts: MemoizedSelector<PostState, Post[]> = createSelector<PostState, PostState, Post[]>(
  selectPostState,
  getPosts
);
export const selectPostsLoaded: MemoizedSelector<PostState, boolean> = createSelector<PostState, PostState, boolean>(
  selectPostState,
  getPostsLoaded
);
export const selectPostsLoading: MemoizedSelector<PostState, boolean> = createSelector<PostState, PostState, boolean>(
  selectPostState,
  getPostsLoading
);
