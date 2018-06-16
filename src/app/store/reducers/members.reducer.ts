import * as memberActions from '../actions/member.actions';
import { Member } from '../../models';

export interface MemberState {
  data: Member[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: MemberState = {
  data: [],
  loaded: false,
  loading: false
};

export function MembersReducer(state: MemberState = initialState, action: memberActions.Actions): MemberState {
  switch (action.type) {
    case memberActions.ADD_MEMBER: {
      console.log('MEMBER ADDED');
      const newData: Member[] = [action.payload, ...state.data];
      return {
        ...state,
        data: newData
      };
    }
    case memberActions.LOAD_MEMBERS: {
      console.log('LOAD');
      return {
        ...state,
        loading: true,
      };
    }
    case memberActions.LOAD_MEMBERS_FAIL: {
      console.log('FAIL');
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    case memberActions.LOAD_MEMBERS_SUCCESS: {
      console.log('SUCCESS');
      const newData: Member[] = [...state.data];
      for (const part of action.payload) {
        newData.push(part);
      }
      return {
        ...state,
        data: newData,
        loading: false,
        loaded: true
      };
    }
    default: {
      console.log('DEFAULT');
      return state;
    }
  }
}

export const getMembers = (state: MemberState) => state.data;
export const getMembersLoaded = (state: MemberState) => state.loaded;
export const getMembersLoading = (state: MemberState) => state.loading;
