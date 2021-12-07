import React from 'react';

const MunroDetails = ({ className, munroId }) => {
  if (!munroId) return;

  const munro = MunroDetails.find((munro) => munro.smcid === munroId);
  const { name, height, meaning, latlng_lat, latlng_lng, smcid, region } =
    munro;

  return (
    <div className={className}>
      <div className="bg-gray-600 bg-opacity-80 rounded-md p-6 w-64 text gray-50">
        <ul className="text-sm">
          <li className="text-lg font-bold">{name}</li>
          <li className="italic">{meaning}</li>
          <li>{region}</li>
          <li>Height: {height} m </li>
          <li className="text-lg font-bold">{name}</li>
        </ul>
      </div>
    </div>
  );
};

export default MunroDetails;
