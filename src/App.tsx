import React, { FC } from 'react';
import Menu from '@/components/Menu';
import { MainRoutes } from '@/routes';

const App: FC = () => {
  return (
    <>
      <Menu />
      <MainRoutes />
    </>
  );
};

export default App;
