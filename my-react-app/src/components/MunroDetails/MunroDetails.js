import React from 'react';

import { Link } from 'react-router-dom';

import munroData from '../Data/munroData';
import { Forecast } from '../Weather/Weather';

const MunroDetails = ({ className, munroId }) => {
  if (!munroId) return;

  const munro = munroData.find((munro) => munro.smcid === munroId);
  const { name, height, meaning, latlng_lat, latlng_lng, smcid, region } =
    munro;

  return (
    <div className={className} role="contentinfo">
      <div className="bg-gray-600 bg-opacity-80 rounded-md p-6 w-70 text-white table-fixed">
        <ul className="text-sm">
          <li className="text-lg font-bold">{name}</li>
          <li className="italic">{meaning}</li>
          <li>{region}</li>
          <li>Height: {height} m </li>
        </ul>
        <Forecast longitude={latlng_lng} latitude={latlng_lat} />
        <div>
          <Link
            to={`munro/${munroId}`}
            className="bg-blue-500 hover:bg-blue-700 text-white text-center mt-2 font-bold py-2 px-4 rounded-full flex flex-col"
          >
            Find out more
          </Link>
        </div>
      </div>
    </div>
  );
};

export { MunroDetails };
