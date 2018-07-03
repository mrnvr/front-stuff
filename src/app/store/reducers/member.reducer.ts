import * as fromMemberActions from '../actions/member.actions';
import { initialState, MemberState } from '../state/member.state';
import { Member } from '../../models';

export function membersReducer(state: MemberState = initialState, action: fromMemberActions.MemberActions): MemberState {
  switch (action.type) {
    case fromMemberActions.MemberActionsTypes.AddMember: {
      console.log('MEMBER ADDED');
      const newMembers: Member[] = [action.payload, ...state.members];
      return {
        ...state,
        members: newMembers
      };
    }
    case fromMemberActions.MemberActionsTypes.LoadMembers: {
      console.log('LOAD');
      return {
        ...state,
        processing: true,
      };
    }
    case fromMemberActions.MemberActionsTypes.LoadMembersFail: {
      console.log('LOAD FAIL');
      console.log(action.payload);
      return {
        ...state,
        processing: false,
        processed: false
      };
    }
    case fromMemberActions.MemberActionsTypes.LoadMembersSuccess: {
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

export const getMembers: (state: MemberState) => Member[] = (state: MemberState) => state.members;
export const getMembersLoaded: (state: MemberState) => boolean = (state: MemberState) => state.processed;
export const getMembersLoading: (state: MemberState) => boolean = (state: MemberState) => state.processing;
