import React, { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux';
import { userSelector } from '@/constants/selectors';
import { Button, Paper, Typography } from '@material-ui/core';
import { useLanguage } from '@/hooks';
import local from './utils/local.json';
import useStyles from './utils/styles';
import { LOG_OUT } from '@/constants/sagas';

const Profile = () => {
  const { email, name, role } = useAppSelector(userSelector);

  const dispatch = useAppDispatch();

  const handleOnClickButton = useCallback(() => {
    dispatch({ type: LOG_OUT });
  }, []);

  const { getTranslateText } = useLanguage(local);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.container}>
        <Typography variant="h5" style={{ marginBottom: 10 }}>
          {getTranslateText('profile')}
        </Typography>
        <div className={classes.containerFields}>
          <Typography>
            {getTranslateText('name')}: {name}
          </Typography>
          <Typography>
            {getTranslateText('email')}: {email}
          </Typography>
          <Typography>
            {getTranslateText('role')}: {getTranslateText(role || '')}
          </Typography>
        </div>
        <Button
          onClick={handleOnClickButton}
          color="secondary"
          variant="contained"
        >
          {getTranslateText('logout')}
        </Button>
      </Paper>
    </div>
  );
};

export default Profile;
