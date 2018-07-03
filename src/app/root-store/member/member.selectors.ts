import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import * as fromMemberReducer from './member.reducer';
import { Member } from '../../models';
import { State } from './member.state';

export const selectMemberState: MemoizedSelector<object, State> = createFeatureSelector<State>(
  'member'
);
export const selectMembers: MemoizedSelector<State, Member[]>
  = createSelector<State, State, Member[]>(
    selectMemberState,
    fromMemberReducer.getMembers
);
export const selectMembersLoaded = createSelector(
    selectMemberState,
    fromMemberReducer.getMembersProcessed
);
export const selectMembersLoading = createSelector(
    selectMemberState,
    fromMemberReducer.getMembersProcessing
);
