import { takeEvery, call, put } from 'redux-saga/effects';
import { DELETE_USER, GET_ALL_USERS } from '@/constants/sagas';
import deleteUserFetch from '@/services/api/http/deleteUserFetch';

const workerDeleteUser = function* ({
  payload,
}: {
  type: string;
  payload: {
    id: number;
  };
}) {
  try {
    yield call(deleteUserFetch, payload);
    yield put({ type: GET_ALL_USERS });
  } catch (e) {}
};

const watchDeleteUser = function* () {
  yield takeEvery(DELETE_USER, workerDeleteUser);
};

export default watchDeleteUser;
