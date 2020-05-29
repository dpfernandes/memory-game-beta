import React from 'react';
import Mymap from './Map';
import { withKnobs, number } from '@storybook/addon-knobs';

export default {
  title: 'Map Sample Component',
  decorators: [withKnobs],
};

const style = {
  height: '600px',
  width: '400px',
};

export const MapComponent = () => {
  const lat = number('Latitude', 55.661869);
  const long = number('Longitude', 12.540742);
  const center = [lat, long];
  const currentLat = number('CurrentLatitude', 55.651869);
  const currentLong = number('CurrentLongitude', 12.535842);
  const currentPosition = [currentLat, currentLong];
  return (
    <Mymap center={center} currentPosition={currentPosition} style={style} />
  );
};
