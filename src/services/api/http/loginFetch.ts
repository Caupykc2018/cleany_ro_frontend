import configuredFetch from './configuredFetch';
import FetchError from './fetchError';

export interface ILoginBody {
  email: string;
  password: string;
}

export interface ILoginResponse {
  id: number;
  email: string;
  name: string;
  role: string;
  refreshToken: string;
  token: string;
}

const loginFetch = async (body: ILoginBody): Promise<ILoginResponse> => {
  const response = await configuredFetch('/api/login', 'POST', undefined, body);

  const data = await response.json();

  if (response.ok) {
    return data;
  }
  throw new FetchError({ ...data, status: response.status });
};

export default loginFetch;
