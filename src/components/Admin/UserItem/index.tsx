import React, { FC } from 'react';
import { Button, Paper, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import local from './utils/local.json';
import { useLanguage } from '@/hooks';
import useStyles from './utils/styles';
import { useAppDispatch } from '@/redux';
import { DELETE_USER } from '@/constants/sagas';

interface Props {
  id: number;
  name: string;
  role: string;
  email: string;
}

const UserItem: FC<Props> = ({ id, name, role, email }) => {
  const { getTranslateText } = useLanguage(local);

  const dispatch = useAppDispatch();

  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <Typography>
        {getTranslateText('id')}: {id}
      </Typography>
      <Typography>
        {getTranslateText('name')}: {name}
      </Typography>
      <Typography>
        {getTranslateText('email')}: {email}
      </Typography>
      <Typography>
        {getTranslateText('role')}: {getTranslateText(role)}
      </Typography>
      <Button
        onClick={() => dispatch({ type: DELETE_USER, payload: { id } })}
        color="secondary"
      >
        <DeleteIcon />
      </Button>
    </Paper>
  );
};

export default UserItem;
