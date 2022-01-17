import React from 'react';

import munroData from '../Data/munroData';
import { Forecast } from '../Weather/Weather';

const MunroDetails = ({ className, munroId }) => {
  if (!munroId) return;

  const munro = munroData.find((munro) => munro.smcid === munroId);
  const { name, height, meaning, latlng_lat, latlng_lng, smcid, region } =
    munro;

  return (
    <div className={className}>
      <div className="bg-gray-600 bg-opacity-80 rounded-md p-6 w-70 text-white">
        <ul className="text-sm">
          <li className="text-lg font-bold">{name}</li>
          <li className="italic">{meaning}</li>
          <li>{region}</li>
          <li>Height: {height} m </li>
        </ul>
        <Forecast longitude={latlng_lng} latitude={latlng_lat} />
      </div>
    </div>
  );
};

export { MunroDetails };
