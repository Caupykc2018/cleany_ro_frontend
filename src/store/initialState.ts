import { IUserState } from '@/reducers/user';
import { IUsersState } from '@/reducers/users';
import { EN } from '@/constants/languages';
import { IStocksState } from '@/reducers/stocks';

export interface IInitialState {
  user: IUserState;
  users: Array<IUsersState>;
  stocks: Array<IStocksState>;
  language: string;
}

const initialState: IInitialState = {
  user: {},
  users: [],
  stocks: [],
  language: EN,
};

export default initialState;
