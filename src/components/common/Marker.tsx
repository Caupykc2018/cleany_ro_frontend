import React, { FC } from 'react';
import RoomIcon from '@material-ui/icons/Room';

interface Props {
  lat: number;
  lng: number;
}

const Marker: FC<Props> = ({ ...rest }) => {
  return <RoomIcon color="secondary" />;
};

export default Marker;
