import { State, initialState, postAdapter} from './post.state';
import { PostActions, PostActionTypes } from './post.actions';
import { Post } from '../../models';

export function reducer(state: State = initialState, action: PostActions): State {
  switch (action.type) {
    case PostActionTypes.AddPost: {
      console.log('POST');
      return {
        ...state,
        processing: true,
        processed: false
      };
    }
    case PostActionTypes.AddPostFail: {
      console.log('ADD FAIL');
      console.log(action.payload);
      return {
        ...state,
        processing: false,
        processed: false
      };
    }
    case PostActionTypes.AddPostSuccess: {
      console.log('ADD SUCCESS');
      return postAdapter.addOne(action.payload, {
        ...state,
        lastId: action.payload.id
      });
    }
    case PostActionTypes.DeletePost: {
      console.log('DELETE');
      return {
        ...state,
        processing: true,
        processed: false
      };
    }
    case PostActionTypes.DeletePostFail: {
      console.log('DELETE FAIL');
      console.log(action.payload);
      return {
        ...state,
        processing: false,
        processed: false
      };
    }
    case PostActionTypes.DeletePostSuccess: {
      console.log('DELETE SUCCESS');
      return postAdapter.removeOne(action.payload, state);
    }
    case PostActionTypes.LoadPosts: {
      console.log('LOAD');
      return {
        ...state,
        processing: true,
      };
    }
    case PostActionTypes.LoadPostsFail: {
      console.log('LOAD FAIL');
      console.log(action.payload);
      return {
        ...state,
        processing: false,
        processed: false
      };
    }
    case PostActionTypes.LoadPostsSuccess: {
      console.log('LOAD SUCCESS');
      let id = state.lastId;
      action.payload.map((post: Post) => {
        id = post.id;
      });
      return postAdapter.addAll(action.payload, {
        ...state,
        lastId: id,
        processed: true,
        processing: false
      });
    }
    default: {
      console.log('DEFAULT');
      return state;
    }
  }
}

export const getPostsLastId: (state: State) => number = (state: State) => state.lastId;
export const getPostsProcessed: (state: State) => boolean = (state: State) => state.processed;
export const getPostsProcessing: (state: State) => boolean = (state: State) => state.processing;
export const getSelectedPostId: (state: State) => number = (state: State) => state.selectedPostId;
