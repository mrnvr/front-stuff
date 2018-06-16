import * as member from './members.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface AppState {
  members: member.MemberState;
}

export const reducers: ActionReducerMap<AppState> = {
  members: member.MembersReducer
};

export const getAppState = createFeatureSelector<AppState>(
  'members'
);

// members state
export const getMembersState = createSelector(
  getAppState,
  (state: AppState) => state.members
);

export const getMembers = createSelector(
  getMembersState,
  member.getMembers
);

export const getMembersLoaded = createSelector(
  getMembersState,
  member.getMembersLoaded
);

export const getMembersLoading = createSelector(
  getMembersState,
  member.getMembersLoading
);
