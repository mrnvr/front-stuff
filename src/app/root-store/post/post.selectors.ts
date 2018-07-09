import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPostReducer from './post.reducer';
import { postAdapter, State } from './post.state';
import { Post } from '../../models';

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = postAdapter.getSelectors();

export const selectPostState = createFeatureSelector<State>('post');

export const selectPosts = createSelector(
  selectPostState,
  selectAll
);

export const selectLastPosts = (limit: number) => createSelector(
  selectPosts,
  (posts: Post[]) => posts.filter(post => post.id >= limit)
);

export const selectPostsLastId = createSelector(
  selectPostState,
  fromPostReducer.getPostsLastId
);

export const selectCurrentPostId = createSelector(
  selectPostState,
  fromPostReducer.getSelectedPostId
);

export const selectCurrentPost = createSelector(
  selectEntities,
  selectCurrentPostId,
  (postEntities, postId) => postEntities[postId]
);
