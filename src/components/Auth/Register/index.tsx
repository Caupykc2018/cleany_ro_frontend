import React, { useCallback, useMemo } from 'react';
import { useLanguage } from '@/hooks';
import local from '@/components/Auth/Register/utils/local.json';
import { Button, TextField, Typography } from '@material-ui/core';
import useStyle from './utils/styles';
import { useFormik } from 'formik';
import { DropDownButton } from '@/components/common';
import { CLIENT_ROLE, COMPANY_ROLE, SELLER_ROLE } from '@/constants/roles';

import { string, object } from 'yup';
import { useAppDispatch } from '@/redux';
import { REGISTER } from '@/constants/sagas';

export const validationSchema = object().shape({
  email: string().required('validEmail'),
  password: string().required('validPassword'),
  name: string().required('validName'),
  role: string(),
});

const Register = () => {
  const { getTranslateText } = useLanguage(local);

  const classes = useStyle();
  const dispatch = useAppDispatch();

  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
      role: CLIENT_ROLE,
    },
    validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      dispatch({ type: REGISTER, payload: values });
    },
  });

  const dropDownList = useMemo(
    () =>
      [CLIENT_ROLE, COMPANY_ROLE, SELLER_ROLE].map((item) => ({
        display: getTranslateText(item),
        value: item,
      })),
    [getTranslateText]
  );

  const handleChangeRole = useCallback(
    (value) => handleChange('role')(value),
    []
  );

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
          label={getTranslateText('name')}
          onChange={handleChange('name')}
          error={Boolean(errors.name)}
          helperText={getTranslateText(errors.name || '')}
        />
        <TextField
          label={getTranslateText('password')}
          onChange={handleChange('password')}
          error={Boolean(errors.password)}
          helperText={getTranslateText(errors.password || '')}
        />
        <div className={classes.containerRole}>
          <Typography>{getTranslateText('role')}:</Typography>
          <DropDownButton
            initialValue={values.role}
            list={dropDownList}
            variant="contained"
            styleClasses={{ button: classes.dropDownButton }}
            onChangeValue={handleChangeRole}
          />
        </div>
      </div>
      <Button variant="contained" color="primary" type="submit">
        {getTranslateText('submit')}
      </Button>
    </form>
  );
};

export default Register;
