import configuredFetch from '@/services/api/http/configuredFetch';
import FetchError from '@/services/api/http/fetchError';

export interface IGetAllStocksResponse {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

const getAllStocksFetch = async (): Promise<Array<IGetAllStocksResponse>> => {
  const response = await configuredFetch('/api/stocks', 'GET', undefined);

  const data = await response.json();

  if (response.ok) {
    return data;
  }
  throw new FetchError({ ...data, status: response.status });
};

export default getAllStocksFetch;
