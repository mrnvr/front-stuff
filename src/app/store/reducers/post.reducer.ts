import * as fromPostActions from '../actions/post.actions';
import { Post } from '../../models';
import { initialState, PostState } from '../state/post.state';

export function postReducer(state: PostState = initialState, action: fromPostActions.PostActions): PostState {
  switch (action.type) {
    case fromPostActions.PostActionsTypes.AddPost: {
      console.log('POST');
      return {
        ...state,
        processing: true,
      };
    }
    case fromPostActions.PostActionsTypes.AddPostFail: {
      console.log('ADD FAIL');
      console.log(action.payload);
      return {
        ...state,
        processing: false,
        processed: false
      };
    }
    case fromPostActions.PostActionsTypes.AddPostSuccess: {
      console.log('ADD SUCCESS');
      const newPosts: Post[] = [action.payload, ...state.posts];
      return {
        ...state,
        posts: newPosts,
        processing: false,
        processed: true
      };
    }
    case fromPostActions.PostActionsTypes.LoadPosts: {
      console.log('LOAD');
      return {
        ...state,
        processing: true,
      };
    }
    case fromPostActions.PostActionsTypes.LoadPostsFail: {
      console.log('LOAD FAIL');
      console.log(action.payload);
      return {
        ...state,
        processing: false,
        processed: false
      };
    }
    case fromPostActions.PostActionsTypes.LoadPostsSuccess: {
      console.log('LOAD SUCCESS');
      const newPosts: Post[] = [...state.posts];
      for (const post of action.payload) {
        newPosts.push(post);
      }
      return {
        ...state,
        posts: newPosts,
        processing: false,
        processed: true
      };
    }
    default: {
      console.log('DEFAULT');
      return state;
    }
  }
}

export const getPosts: (state: PostState) => Post[] = (state: PostState) => state.posts;
export const getPostsLoaded: (state: PostState) => boolean = (state: PostState) => state.processed;
export const getPostsLoading: (state: PostState) => boolean = (state: PostState) => state.processing;
