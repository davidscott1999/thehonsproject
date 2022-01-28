import React from 'react';

import munroData from '../Data/munroData';
import { Forecast } from '../Weather/Weather';

const MunroProfile = ({ className, munroId }) => {
  const munro = munroData.find((munro) => munro.smcid === munroId);
  const { name, height, meaning, latlng_lat, latlng_lng, smcid, region } =
    munro;

  return (
    <div className={className}>
      {!munroId && (
        <section className="w-full text-gray-900 py-36 bg-center bg-cover bg-no-repeat">
          <div className="bg-gray-600 bg-opacity-80 rounded-md p-6 w-70 text-white">
            <h1 className="text-lg font-bold">{name}</h1>
            <p className="italic">{meaning}</p>
          </div>
          <div className="bg-gray-600 bg-opacity-80 rounded-md p-6 w-70 text-white">
            <ul className="text-sm">
              <li>smcID:{smcid}</li>
              <li>Region:{region}</li>
              <li>Height:{height}m</li>
              <li>Latitude:{latlng_lat}</li>
              <li>Longitude:{latlng_lng}</li>
            </ul>
            <div>
              <Forecast longitude={latlng_lng} latitude={latlng_lat}></Forecast>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export { MunroProfile };
