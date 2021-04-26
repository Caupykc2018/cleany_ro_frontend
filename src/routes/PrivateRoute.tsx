import React, { FC } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import PrivateRoutePage from '@/components/PrivateRoutePage';
import { ROLES } from '@/constants/roles';

interface Props extends RouteProps {
  roles?: Array<string>;
}

const PrivateRoute: FC<Props> = ({
  path,
  children,
  exact = false,
  roles = ROLES,
}) => {
  return (
    <Route path={path} exact={exact}>
      <PrivateRoutePage roles={roles}>{children}</PrivateRoutePage>
    </Route>
  );
};

export default PrivateRoute;
