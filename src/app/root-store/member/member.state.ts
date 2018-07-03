import { Member } from '../../models';

export interface State {
  members: Member[];
  processed: boolean;
  processing: boolean;
}

export const initialState: State = {
  members: [],
  processed: false,
  processing: false
};
