import React, { useCallback, useState } from 'react';
import { Paper, Typography } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { useLanguage } from '@/hooks';
import local from './utils/local.json';
import useStyles from './utils/styles';
import LogIn from './LogIn';
import Register from '@/components/Auth/Register';

const Auth = () => {
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const { getTranslateText } = useLanguage(local);

  const classes = useStyles();

  const handleOnClickToggleButton = useCallback(
    (event, value: boolean) => setIsRegister(value),
    []
  );

  return (
    <div className={classes.root}>
      <Paper
        classes={{
          root: classes.paper,
        }}
      >
        <Typography className={classes.title}>
          {getTranslateText('title')}
        </Typography>
        <ToggleButtonGroup
          value={isRegister}
          classes={{ grouped: classes.toggleButton }}
          onChange={handleOnClickToggleButton}
          exclusive
        >
          <ToggleButton value={false}>{getTranslateText('login')}</ToggleButton>
          <ToggleButton value>{getTranslateText('register')}</ToggleButton>
        </ToggleButtonGroup>
        {isRegister ? <Register /> : <LogIn />}
      </Paper>
    </div>
  );
};

export default Auth;
