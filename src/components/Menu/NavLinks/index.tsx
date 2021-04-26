import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '@/redux';
import { userSelector } from '@/constants/selectors';
import { useLanguage } from '@/hooks';
import local from './utils/local.json';
import { Button } from '@material-ui/core';
import useStyles from './utils/styles';

interface ILinkData {
  path: string;
  display: string;
}

interface IRoleLinks {
  [p: string]: Array<ILinkData>;
}

const roleLinks: IRoleLinks = {
  admin: [
    {
      path: '/admin',
      display: 'admin',
    },
  ],
  client: [],
  seller: [],
  company: [
    {
      path: '/stocks',
      display: 'stocks',
    },
  ],
  noAuth: [],
};

const generateLinks = (role: string = 'noAuth'): Array<ILinkData> => {
  return [
    {
      path: '/profile',
      display: 'profile',
    },
    ...roleLinks[role],
    {
      path: '/about',
      display: 'about',
    },
  ];
};

const NavLinks: FC = () => {
  const { role } = useAppSelector(userSelector);

  const classes = useStyles();

  const { getTranslateText } = useLanguage(local);

  return (
    <>
      {generateLinks(role).map(({ path, display }) => (
        <NavLink
          key={path}
          component={Button}
          to={path}
          className={classes.button}
        >
          {getTranslateText(display)}
        </NavLink>
      ))}
    </>
  );
};

export default NavLinks;
