import { Reducer } from 'redux';
import { USER_REMOVE, USER_SET } from '@/constants/reducers/user';

export interface IUserState {
  id?: number;
  email?: string;
  name?: string;
  role?: string;
  refreshToken?: string;
  token?: string;
}

const userReducer: Reducer<IUserState> = (state = {}, { type, payload }) => {
  switch (type) {
    case USER_SET:
      return payload.user;
    case USER_REMOVE:
      return {};
    default:
      return state;
  }
};

export default userReducer;
