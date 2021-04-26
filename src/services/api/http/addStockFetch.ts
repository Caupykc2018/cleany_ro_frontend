import configuredFetch from './configuredFetch';
import FetchError from './fetchError';

export interface IAddStockBody {
  name: string;
  latitude: number;
  longitude: number;
}

const addStockFetch = async (body: IAddStockBody): Promise<any> => {
  const response = await configuredFetch(
    '/api/stocks',
    'POST',
    undefined,
    body
  );

  const data = await response.json();

  if (response.ok) {
    return data;
  }
  throw new FetchError({ ...data, status: response.status });
};

export default addStockFetch;
