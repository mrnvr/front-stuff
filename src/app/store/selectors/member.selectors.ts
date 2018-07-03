import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { MemberState } from '../state/member.state';
import { getMembers, getMembersLoaded, getMembersLoading } from '../reducers';
import { Member } from '../../models';

export const selectMemberState: MemoizedSelector<object, MemberState> = createFeatureSelector<MemberState>('members');
export const selectMembers: MemoizedSelector<MemberState, Member[]> = createSelector<MemberState, MemberState, Member[]>(
  selectMemberState,
  getMembers
);
export const selectMembersLoaded: MemoizedSelector<MemberState, boolean> = createSelector<MemberState, MemberState, boolean>(
  selectMemberState,
  getMembersLoaded
);
export const selectMembersLoading: MemoizedSelector<MemberState, boolean> = createSelector<MemberState, MemberState, boolean>(
  selectMemberState,
  getMembersLoading
);
