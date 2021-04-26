import { all } from 'redux-saga/effects';
import LogInSaga from './logInSaga';
import RegisterSaga from './registerSaga';
import LogOutSaga from './logOutSaga';
import GetAllUsersSaga from './getAllUsersSaga';
import DeleteUserSaga from './deleteUserSaga';
import GetAllStocksSaga from './getAllStocksSaga';
import AddStockSaga from './addStockSaga';

const rootSaga = function* () {
  yield all([
    LogInSaga(),
    RegisterSaga(),
    LogOutSaga(),
    GetAllUsersSaga(),
    DeleteUserSaga(),
    GetAllStocksSaga(),
    AddStockSaga(),
  ]);
};

export default rootSaga;
