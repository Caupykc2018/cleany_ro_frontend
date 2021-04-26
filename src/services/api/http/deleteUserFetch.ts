import configuredFetch from './configuredFetch';
import FetchError from './fetchError';

const deleteUserFetch = async ({ id = 0 }): Promise<any> => {
  const response = await configuredFetch(
    `/api/users/${id}`,
    'DELETE',
    undefined
  );

  const data = await response.json();

  if (response.ok) {
    return data;
  }
  throw new FetchError({ ...data, status: response.status });
};

export default deleteUserFetch;
