import { MemberActions, MemberActionTypes } from './member.actions';
import { Member } from '../../models';
import { initialState, State } from './member.state';

export function reducer(state = initialState, action: MemberActions): State {
  switch (action.type) {
    case MemberActionTypes.AddMember: {
      console.log('MEMBER ADDED');
      const newMembers: Member[] = [action.payload, ...state.members];
      return {
        ...state,
        members: newMembers
      };
    }
    case MemberActionTypes.LoadMembers: {
      console.log('LOAD');
      return {
        ...state,
        processing: true,
      };
    }
    case MemberActionTypes.LoadMembersFail: {
      console.log('LOAD FAIL');
      console.log(action.payload);
      return {
        ...state,
        processing: false,
        processed: false
      };
    }
    case MemberActionTypes.LoadMembersSuccess: {
      console.log('LOAD SUCCESS');
      const newMembers: Member[] = [...state.members];
      for (const member of action.payload) {
        newMembers.push(member);
      }
      return {
        ...state,
        members: newMembers,
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

export const getMembers: (state: State) => Member[] = (state: State) => state.members;
export const getMembersProcessed: (state: State) => boolean = (state: State) => state.processed;
export const getMembersProcessing: (state: State) => boolean = (state: State) => state.processing;
