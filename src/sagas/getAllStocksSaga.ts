import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_ALL_STOCKS } from '@/constants/sagas';
import getAllStocksFetch, {
  IGetAllStocksResponse,
} from '@/services/api/http/getAllStocksFetch';
import { STOCKS_SET } from '@/constants/reducers/stocks';

const workerGetAllStocks = function* () {
  try {
    const data: Array<IGetAllStocksResponse> = yield call(getAllStocksFetch);
    yield put({ type: STOCKS_SET, payload: { stocks: data } });
  } catch (e) {}
};

const watchGetAllStocks = function* () {
  yield takeEvery(GET_ALL_STOCKS, workerGetAllStocks);
};

export default watchGetAllStocks;
