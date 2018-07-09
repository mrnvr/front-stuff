import { Action, Selector, State, StateContext } from '@ngxs/store';

import { catchError, map } from 'rxjs/operators';

import { AddPost, AddPostFail, AddPostSuccess, LoadPosts, LoadPostsFail, LoadPostsSuccess } from './post.actions';
import { Post } from '../../models';
import { ApiService } from '../../services';

export interface PostStateModel {
  posts: Post[];
  lastId?: number;
  processed?: boolean;
  processing?: boolean;
  selectedPostId?: number;
  errorMessage?: Object;
}

export const initialState: PostStateModel = {
  posts: [],
  lastId: null,
  processed: false,
  processing: false,
  selectedPostId: null,
  errorMessage: null
};

@State<PostStateModel>({
  name: 'posts',
  defaults: initialState
})

export class PostState {

  constructor(private api: ApiService) {}

  @Selector()
  static getPosts(state: PostStateModel) {
    return state.posts;
  }

  @Selector()
  static getErrorMessage(state: PostStateModel) {
    return state.errorMessage;
  }

  @Selector()
  static getLastId(state: PostStateModel) {
    return state.lastId;
  }

  @Action(AddPost)
  sendPost$(ctx: StateContext<PostStateModel>, action: AddPost) {
    return this.api.postComment(action.payload)
      .pipe(
        map(() => ctx.dispatch(new AddPostSuccess(action.payload))),
        catchError((err: any) => ctx.dispatch(new AddPostFail(err)))
      );
  }

  @Action(AddPostFail)
  sendPostFail(ctx: StateContext<PostStateModel>, action: AddPostFail) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      errorMessage: action.payload
    });
  }

  @Action(AddPostSuccess)
  sendPostSuccess(ctx: StateContext<PostStateModel>, action: AddPostSuccess) {
    const state = ctx.getState();
    const newPosts = [action.payload, ...state.posts];
    const current: PostStateModel = {
      posts: newPosts,
      lastId: action.payload.id
    };

    ctx.setState({
      ...state,
      ...current
    });
  }

  @Action(LoadPosts)
  loadPosts$(ctx: StateContext<PostStateModel>) {
    return this.api.getPosts()
      .pipe(
        map((posts: Post[]) => ctx.dispatch(new LoadPostsSuccess(posts))),
        catchError((err: any) => ctx.dispatch(new LoadPostsFail(err)))
      );
  }

  @Action(LoadPostsSuccess)
  LoadPostsSuccess(ctx: StateContext<PostStateModel>, action: LoadPostsSuccess) {
    const state = ctx.getState();
    const newPosts = [...state.posts, ...action.payload];
    let id = state.lastId;
    action.payload.map((post: Post) => {
      id = post.id;
    });
    const current: PostStateModel = {
      posts: newPosts,
      lastId: id
    };

    ctx.setState({
      ...state,
      ...current
    });
  }

  @Action(LoadPostsFail)
  loadPostsFail(ctx: StateContext<PostStateModel>, action: LoadPostsFail) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      errorMessage: action.payload
    });
  }
}
