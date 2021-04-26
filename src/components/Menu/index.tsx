import React, { useCallback } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import local from './utils/local.json';
import useStyles from './utils/styles';
import { useLanguage } from '@/hooks';
import logo from '@/images/logo.png';
import { DropDownButton } from '@/components/common';
import { EN, UA } from '@/constants/languages';
import NavLinks from '@/components/Menu/NavLinks';

const Menu = () => {
  const { language, setLanguage } = useLanguage(local);

  const classes = useStyles();

  const handleOnChangeLanguage = useCallback((value) => setLanguage(value), []);

  return (
    <AppBar position="static" style={{ marginBottom: 20 }}>
      <Toolbar
        classes={{
          root: classes.root,
        }}
      >
        <div className={classes.leftContainer}>
          <img src={logo} alt="" width={50} />
          <NavLinks />
        </div>
        <div>
          <DropDownButton
            list={[EN, UA].map((item) => ({ display: item, value: item }))}
            initialValue={language}
            onChangeValue={handleOnChangeLanguage}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
