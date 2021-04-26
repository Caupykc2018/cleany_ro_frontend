import { takeEvery, call, put } from 'redux-saga/effects';
import { LOGIN } from '@/constants/sagas';
import loginFetch, {
  ILoginBody,
  ILoginResponse,
} from '@/services/api/http/loginFetch';
import { USER_SET } from '@/constants/reducers';

const workerLogIn = function* ({
  payload,
}: {
  payload: ILoginBody;
  type: string;
}) {
  try {
    const data: ILoginResponse = yield call(loginFetch, payload);
    yield put({ type: USER_SET, payload: { user: data } });
  } catch (e) {}
};

const watchLogIn = function* () {
  yield takeEvery(LOGIN, workerLogIn);
};

export default watchLogIn;
