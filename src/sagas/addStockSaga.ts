import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_ALL_STOCKS, ADD_STOCK } from '@/constants/sagas';
import addStockFetch, {
  IAddStockBody,
} from '@/services/api/http/addStockFetch';

const workerAddStock = function* ({
  payload,
}: {
  type: string;
  payload: IAddStockBody;
}) {
  try {
    yield call(addStockFetch, payload);
    yield put({ type: GET_ALL_STOCKS });
  } catch (e) {}
};

const watchAddStock = function* () {
  yield takeEvery(ADD_STOCK, workerAddStock);
};

export default watchAddStock;
