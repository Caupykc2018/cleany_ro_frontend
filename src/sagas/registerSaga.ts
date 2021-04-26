import { takeEvery, call, put } from 'redux-saga/effects';
import { REGISTER } from '@/constants/sagas';
import registerFetch, {
  IRegisterBody,
  IRegisterResponse,
} from '@/services/api/http/registerFetch';
import { USER_SET } from '@/constants/reducers';

const workerRegister = function* ({
  payload,
}: {
  payload: IRegisterBody;
  type: string;
}) {
  try {
    const data: IRegisterResponse = yield call(registerFetch, payload);
    yield put({ type: USER_SET, payload: { user: data } });
  } catch (e) {}
};

const watchRegister = function* () {
  yield takeEvery(REGISTER, workerRegister);
};

export default watchRegister;
