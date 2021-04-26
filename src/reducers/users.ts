import { Reducer } from 'redux';
import { USERS_SET } from '@/constants/reducers/users';

export interface IUsersState {
  id: number;
  email: string;
  name: string;
  role: string;
}

const usersReducer: Reducer<Array<IUsersState>> = (
  state = [],
  { type, payload }
) => {
  switch (type) {
    case USERS_SET:
      return payload.users;
    default:
      return state;
  }
};

export default usersReducer;
