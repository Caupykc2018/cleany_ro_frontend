import configuredFetch from './configuredFetch';
import FetchError from '@/services/api/http/fetchError';

export interface IRegisterBody {
  email: string;
  password: string;
  name: string;
  role: string;
}

export interface IRegisterResponse {
  id: number;
  email: string;
  name: string;
  role: string;
  refreshToken: string;
  token: string;
}

const registerFetch = async (body: IRegisterBody) => {
  const response = await configuredFetch(
    '/api/register',
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

export default registerFetch;
