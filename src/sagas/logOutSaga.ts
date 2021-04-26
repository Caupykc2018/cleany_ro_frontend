import { takeEvery, put } from 'redux-saga/effects';
import { USER_REMOVE } from '@/constants/reducers';
import { LOG_OUT } from '@/constants/sagas';

const workerLogOut = function* () {
  yield put({ type: USER_REMOVE });
};

const watchLogOut = function* () {
  yield takeEvery(LOG_OUT, workerLogOut);
};

export default watchLogOut;
