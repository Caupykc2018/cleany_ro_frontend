import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './utils/styles';
import { useLanguage } from '@/hooks';
import local from './utils/local.json';
import { useAppDispatch, useAppSelector } from '@/redux';
import StockItem from '@/components/Stocks/StockItem';
import { GET_ALL_STOCKS } from '@/constants/sagas';
import AddStock from '@/components/Stocks/AddStock';

const Stocks = () => {
  const [isOpenAdd, setIsOpenAdd] = useState<boolean>(false);
  const stocks = useAppSelector((state) => state.stocks);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: GET_ALL_STOCKS });
  }, []);

  const classes = useStyles();

  const { getTranslateText } = useLanguage(local);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 20,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsOpenAdd(true)}
          >
            <AddIcon />
            {getTranslateText('add')}
          </Button>
        </div>
        {stocks.map(({ id, latitude, longitude, name }) => (
          <StockItem
            key={id}
            id={id}
            latitude={latitude}
            longitude={longitude}
            name={name}
          />
        ))}
      </div>
      <AddStock isOpen={isOpenAdd} onClose={() => setIsOpenAdd(false)} />
    </div>
  );
};

export default Stocks;
