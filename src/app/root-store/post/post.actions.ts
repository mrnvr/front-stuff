import { Action } from '@ngrx/store';
import { Post } from '../../models';

export enum PostActionTypes {
  AddPost = '[POST] Add Post',
  AddPostFail = '[POST] Add Post Fail',
  AddPostSuccess = '[POST] Add Post Success',
  LoadPosts = '[POST] Load Posts',
  LoadPostsFail = '[POST] Load Posts Fail',
  LoadPostsSuccess = '[POST] Load Posts Success',
}

export class AddPost implements Action {
  readonly type = PostActionTypes.AddPost;

  constructor(public payload: Post) {}
}

export class AddPostFail implements Action {
  readonly type = PostActionTypes.AddPostFail;

  constructor(public payload: any) {}
}

export class AddPostSuccess implements Action {
  readonly type = PostActionTypes.AddPostSuccess;

  constructor(public payload: Post) {}
}

export class LoadPosts implements Action {
  readonly type = PostActionTypes.LoadPosts;
}

export class LoadPostsFail implements Action {
  readonly type = PostActionTypes.LoadPostsFail;

  constructor(public payload: any) {}
}

export class LoadPostsSuccess implements Action {
  readonly type = PostActionTypes.LoadPostsSuccess;

  constructor(public payload: Post[]) {}
}

export type PostActions = AddPost
  | AddPostFail
  | AddPostSuccess
  | LoadPosts
  | LoadPostsFail
  | LoadPostsSuccess;
