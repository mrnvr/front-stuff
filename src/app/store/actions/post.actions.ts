import { Action } from '@ngrx/store';

import { Post } from '../../models';

export enum PostActionsTypes {
  AddPost = '[POST] Add Post',
  AddPostFail = '[POST] Add Post Fail',
  AddPostSuccess = '[POST] Add Post Success',
  LoadPosts = '[POST] Load Posts',
  LoadPostsFail = '[POST] Load Posts Fail',
  LoadPostsSuccess = '[POST] Load Posts Success',
}

export class AddPost implements Action {
  readonly type = PostActionsTypes.AddPost;

  constructor(public payload: Post) {}
}

export class AddPostFail implements Action {
  readonly type = PostActionsTypes.AddPostFail;

  constructor(public payload: any) {}
}

export class AddPostSuccess implements Action {
  readonly type = PostActionsTypes.AddPostSuccess;

  constructor(public payload: Post) {}
}

export class LoadPosts implements Action {
  readonly type = PostActionsTypes.LoadPosts;
}

export class LoadPostsFail implements Action {
  readonly type = PostActionsTypes.LoadPostsFail;

  constructor(public payload: any) {}
}

export class LoadPostsSuccess implements Action {
  readonly type = PostActionsTypes.LoadPostsSuccess;

  constructor(public payload: Post[]) {}
}

export type PostActions = AddPost
  | AddPostFail
  | AddPostSuccess
  | LoadPosts
  | LoadPostsFail
  | LoadPostsSuccess;
