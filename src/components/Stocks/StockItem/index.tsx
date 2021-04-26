import React, { FC } from 'react';
import { Paper, Typography } from '@material-ui/core';
import { GoogleMap } from '@/components/common';

interface Props {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const StockItem: FC<Props> = ({ id, name, latitude, longitude, children }) => {
  return (
    <Paper style={{ padding: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h4">{name}</Typography>
      </div>
      <div style={{ height: 300 }}>
        <GoogleMap
          center={{ lat: latitude, lng: longitude }}
          zoom={10}
          points={[{ lat: latitude, lng: longitude }]}
        />
      </div>
    </Paper>
  );
};

export default StockItem;
