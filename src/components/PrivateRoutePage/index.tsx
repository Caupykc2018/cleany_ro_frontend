import React, { FC } from 'react';
import Auth from '@/components/Auth';
import { useAppSelector } from '@/redux';
import { isAuthorizedSelector, userSelector } from '@/constants/selectors';

interface Props {
  roles: Array<string>;
}

const PrivateRoutePage: FC<Props> = ({ children, roles }) => {
  const isAuthorized = useAppSelector(isAuthorizedSelector);
  const { role } = useAppSelector(userSelector);

  if (!isAuthorized) {
    return <Auth />;
  }

  if (!roles.includes(role || '')) {
    return <h1>kj</h1>;
  }

  return <>{children}</>;
};

export default PrivateRoutePage;
