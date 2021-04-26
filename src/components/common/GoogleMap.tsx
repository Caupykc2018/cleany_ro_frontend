import React, { FC } from 'react';
import GoogleMapReact, { ClickEventValue } from 'google-map-react';
import { useLanguage } from '@/hooks';
import Marker from './Marker';

interface Props {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
  points?: Array<{ lat: number; lng: number }>;
  onClick?: (value: ClickEventValue) => void;
}

const GoogleMap: FC<Props> = ({ center, zoom, points = [], onClick }) => {
  const { language } = useLanguage({});

  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: 'AIzaSyCcZde2JQ-GRIjc4uKK17AAncWzyWu3i4Y',
        language,
      }}
      center={center}
      zoom={zoom}
      onClick={onClick}
    >
      {points.map((point, index) => (
        <Marker key={index} {...point} />
      ))}
    </GoogleMapReact>
  );
};

export default GoogleMap;
