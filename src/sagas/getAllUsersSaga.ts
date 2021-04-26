import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_ALL_USERS } from '@/constants/sagas';
import getAllUsersFetch, {
  IGetAllUsersResponse,
} from '@/services/api/http/getAllUsersFetch';
import { USERS_SET } from '@/constants/reducers/users';

const workerGetAllUsers = function* () {
  try {
    const data: Array<IGetAllUsersResponse> = yield call(getAllUsersFetch);
    yield put({ type: USERS_SET, payload: { users: data } });
  } catch (e) {}
};

const watchGetAllUsers = function* () {
  yield takeEvery(GET_ALL_USERS, workerGetAllUsers);
};

export default watchGetAllUsers;
