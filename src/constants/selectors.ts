import { IInitialState } from '@/store/initialState';

export const languageSelector = (state: IInitialState) => state.language;
export const isAuthorizedSelector = (state: IInitialState) =>
  Boolean(state.user.token);
export const userSelector = (state: IInitialState) => state.user;
