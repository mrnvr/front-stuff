import { Action } from '@ngrx/store';
import { Member } from '../../models';

export enum MemberActionTypes {
  AddMember = '[MEMBER] Add Member',
  AddMemberFail = '[MEMBER] Add Member Fail',
  AddMemberSuccess = '[MEMBER] Add Member Success',
  DeleteMember = '[MEMBER] Delete Member',
  DeleteMemberFail = '[MEMBER] Delete Member Fail',
  DeleteMemberSuccess = '[MEMBER] Delete Member Success',
  LoadMembers = '[MEMBER] Load Members',
  LoadMembersFail = '[MEMBER] Load Members Fail',
  LoadMembersSuccess = '[MEMBER] Load Members Success',
  UpdateMembers = '[MEMBER] Update Members',
  UpdateMembersFail = '[MEMBER] Update Members Fail',
  UpdateMembersSuccess = '[MEMBER] Update Members Success',
}

export class AddMember implements Action {
  readonly type = MemberActionTypes.AddMember;

  constructor(public payload: Member) {}
}

export class LoadMembers implements Action {
  readonly type = MemberActionTypes.LoadMembers;
}

export class LoadMembersFail implements Action {
  readonly type = MemberActionTypes.LoadMembersFail;

  constructor(public payload: any) {}
}

export class LoadMembersSuccess implements Action {
  readonly type = MemberActionTypes.LoadMembersSuccess;

  constructor(public payload: Member[]) {}
}

export class DeleteMember implements Action {
  readonly type = MemberActionTypes.DeleteMember;

  constructor(public payload: number) {}
}

export class UpdateMember implements Action {
  readonly type = MemberActionTypes.UpdateMembers;

  constructor(public payload: Member) {}
}

export type MemberActions = AddMember
  | DeleteMember
  | UpdateMember
  | LoadMembers
  | LoadMembersFail
  | LoadMembersSuccess;
