import { Reducer } from 'redux';
import { STOCKS_SET } from '@/constants/reducers/stocks';

export interface IStocksState {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const stocksReducer: Reducer<Array<IStocksState>> = (
  state = [],
  { type, payload }
) => {
  switch (type) {
    case STOCKS_SET:
      return payload.stocks;
    default:
      return state;
  }
};

export default stocksReducer;
