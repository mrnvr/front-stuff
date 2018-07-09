import { Post } from '../../models';

// change [POST] par le nom de la page déclanchant l'action
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

export class AddPost {
  static readonly type = PostActionTypes.AddPost;

  constructor(public payload: Post) {}
}

export class AddPostFail {
  static readonly type = PostActionTypes.AddPostFail;

  constructor(public payload: any) {}
}

export class AddPostSuccess {
  static readonly type = PostActionTypes.AddPostSuccess;

  constructor(public payload: Post) {}
}

export class DeletePost {
  static readonly type = PostActionTypes.DeletePost;

  constructor(public payload: number) {}
}

export class DeletePostFail {
  static readonly type = PostActionTypes.DeletePostFail;

  constructor(public payload: any) {}
}

export class DeletePostSuccess {
  static readonly type = PostActionTypes.DeletePostSuccess;

  constructor(public payload: number) {}
}

export class LoadPosts {
  static readonly type = PostActionTypes.LoadPosts;
}

export class LoadPostsFail {
  static readonly type = PostActionTypes.LoadPostsFail;

  constructor(public payload: any) {}
}

export class LoadPostsSuccess {
  static readonly type = PostActionTypes.LoadPostsSuccess;

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
