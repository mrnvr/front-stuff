import { Action } from '@ngrx/store';
import { Post } from '../../models';

export enum PostActionTypes {
  AddPost = '[POST] Add Post',
  AddPostFail = '[POST] Add Post Fail',
  AddPostSuccess = '[POST] Add Post Success',
  DeletePost = '[POST] Delete Post',
  DeletePostFail = '[POST] Delete Post Fail',
  DeletePostSuccess = '[POST] Delete Post Success',
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

export class DeletePost implements Action {
  readonly type = PostActionTypes.DeletePost;

  constructor(public payload: number) {}
}

export class DeletePostFail implements Action {
  readonly type = PostActionTypes.DeletePostFail;

  constructor(public payload: any) {}
}

export class DeletePostSuccess implements Action {
  readonly type = PostActionTypes.DeletePostSuccess;

  constructor(public payload: number) {}
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
  | DeletePost
  | DeletePostFail
  | DeletePostSuccess
  | LoadPosts
  | LoadPostsFail
  | LoadPostsSuccess;
