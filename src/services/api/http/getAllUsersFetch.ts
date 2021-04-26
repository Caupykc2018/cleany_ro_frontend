import configuredFetch from './configuredFetch';
import FetchError from './fetchError';

export interface IGetAllUsersResponse {
  id: number;
  email: string;
  name: string;
  role: string;
  refreshToken: string;
  token: string;
}

const getAllUsersFetch = async (): Promise<IGetAllUsersResponse> => {
  const response = await configuredFetch('/api/users', 'GET', undefined);

  const data = await response.json();

  if (response.ok) {
    return data;
  }
  throw new FetchError({ ...data, status: response.status });
};

export default getAllUsersFetch;
