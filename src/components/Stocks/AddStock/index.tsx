import React, { FC } from 'react';
import { Button, Modal, Paper, TextField, Typography } from '@material-ui/core';
import useStyles from './utils/styles';
import local from './utils/local.json';
import { useLanguage } from '@/hooks';
import { useFormik } from 'formik';
import { GoogleMap } from '@/components/common';
import { useAppDispatch } from '@/redux';
import { ADD_STOCK } from '@/constants/sagas';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AddStock: FC<Props> = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();

  const classes = useStyles();

  const { getTranslateText } = useLanguage(local);

  const { values, handleChange, handleSubmit, setFieldValue } = useFormik<{
    name: string;
    point?: { lat: number; lng: number };
  }>({
    initialValues: {
      name: '',
      point: undefined,
    },
    onSubmit: ({ name, point }) => {
      if (!name || !point) {
        return;
      }
      dispatch({
        type: ADD_STOCK,
        payload: { name, latitude: point?.lat, longitude: point?.lng },
      });
    },
  });

  return (
    <Modal open={isOpen} onClose={onClose} className={classes.modal}>
      <Paper className={classes.container}>
        <div className={classes.containerTitle}>
          <Typography variant="h4">{getTranslateText('add')}</Typography>
        </div>
        <form onSubmit={handleSubmit}>
          <TextField
            label={getTranslateText('name')}
            style={{ width: '100%' }}
            value={values.name}
            onChange={handleChange('name')}
          />
          <div style={{ height: 200, marginBottom: 10, marginTop: 10 }}>
            <GoogleMap
              center={{
                lat: 40,
                lng: 40,
              }}
              zoom={5}
              points={values.point ? [values.point] : []}
              onClick={({ lat, lng }) => {
                setFieldValue('point', { lat, lng });
              }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" type="submit" color="primary">
              {getTranslateText('submit')}
            </Button>
          </div>
        </form>
      </Paper>
    </Modal>
  );
};

export default AddStock;
