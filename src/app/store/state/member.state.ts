import { Member } from '../../models';

export interface MemberState {
  members: Member[];
  processed: boolean;
  processing: boolean;
}

export const initialState: MemberState = {
  members: [],
  processed: false,
  processing: false
};
