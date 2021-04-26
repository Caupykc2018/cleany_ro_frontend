import { store } from '@/store';

const configuredFetch = (
  url = '/',
  method = 'GET',
  headers = {},
  body = !['GET', 'HEAD'].includes(method) ? {} : undefined
) => {
  const {
    user: { token },
  } = store.getState();

  const configuredHeaders = {
    ...headers,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  return fetch(`http://localhost:3001${url}`, {
    method,
    headers: token
      ? {
          ...configuredHeaders,
          Authorization: token,
        }
      : configuredHeaders,
    mode: 'cors',
    credentials: 'include',
    body: body && JSON.stringify(body),
  });
};

export default configuredFetch;
