import { Action } from '@ngrx/store';

import { Member } from '../../models';

export const ADD_MEMBER = '[MEMBER] ADD';
export const ADD_MEMBER_FAIL = '[MEMBER] ADD FAIL';
export const ADD_MEMBER_SUCCESS = '[MEMBER] ADD SUCCESS';

export const DELETE_MEMBER = '[MEMBER] DELETE';
export const DELETE_MEMBER_FAIL = '[MEMBER] DELETE FAIL';
export const DELETE_MEMBER_SUCCESS = '[MEMBER] DELETE SUCCESS';

export const LOAD_MEMBERS = '[MEMBER] LOAD';
export const LOAD_MEMBERS_FAIL = '[MEMBER] LOAD FAIL';
export const LOAD_MEMBERS_SUCCESS = '[MEMBER] LOAD SUCCESS';

export const UPDATE_MEMBER = '[MEMBER] UPDATE';
export const UPDATE_MEMBER_FAIL = '[MEMBER] UPDATE FAIL';
export const UPDATE_MEMBER_SUCCESS = '[MEMBER] UPDATE SUCCESS';

export class AddMember implements Action {
  readonly type = ADD_MEMBER;

  constructor(public payload: Member) {}
}

export class LoadMembers implements Action {
  readonly type = LOAD_MEMBERS;
}

export class LoadMembersFail implements Action {
  readonly type = LOAD_MEMBERS_FAIL;

  constructor(public payload: any) {}
}

export class LoadMembersSuccess implements Action {
  readonly type = LOAD_MEMBERS_SUCCESS;

  constructor(public payload: Member[]) {}
}

export class DeleteMember implements Action {
  readonly type = DELETE_MEMBER;

  constructor(public payload: number) {}
}

export class UpdateMember implements Action {
  readonly type = UPDATE_MEMBER;

  constructor(public payload: Member) {}
}

export type Actions = AddMember
  | DeleteMember
  | UpdateMember
  | LoadMembers
  | LoadMembersFail
  | LoadMembersSuccess;
