import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Post } from '../../models';

export const postAdapter: EntityAdapter<Post> = createEntityAdapter<Post>({
  selectId: (post: Post) => post.title,
  sortComparer: sortById
});

function sortById(a: Post, b: Post): number {
  return b.id - a.id; // sort descending
}

export interface State extends EntityState<Post> {
  lastId: number;
  processed: boolean;
  processing: boolean;
  selectedPostId: number;
}

export const initialState: State = postAdapter.getInitialState({
  lastId: -1,
  processed: false,
  processing: false,
  selectedPostId: null
});
