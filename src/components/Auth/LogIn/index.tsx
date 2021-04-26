import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { useLanguage } from '@/hooks';
import local from './utils/local.json';
import useStyles from './utils/styles';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { useAppDispatch } from '@/redux';
import { LOGIN } from '@/constants/sagas';

const validationSchema = object().shape({
  email: string().required('validEmail'),
  password: string().required('validPassword'),
});

const LogIn = () => {
  const { getTranslateText } = useLanguage(local);

  const dispatch = useAppDispatch();

  const classes = useStyles();
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      dispatch({ type: LOGIN, payload: values });
    },
  });

  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <div className={classes.containerFields}>
        <TextField
          label={getTranslateText('email')}
          onChange={handleChange('email')}
          error={Boolean(errors.email)}
          helperText={getTranslateText(errors.email || '')}
        />
        <TextField
          label={getTranslateText('password')}
          onChange={handleChange('password')}
          error={Boolean(errors.password)}
          helperText={getTranslateText(errors.password || '')}
        />
      </div>
      <Button variant="contained" color="primary" type="submit">
        {getTranslateText('submit')}
      </Button>
    </form>
  );
};

export default LogIn;
