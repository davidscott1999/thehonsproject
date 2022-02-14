import React from 'react';

const Cards = ({ image, children, heading }) => {
  return (
    <div className="rounded group overflow-hidden shadow-lg bg-gray-200 hover:bg-gray-300 duration-500 pb-4">
      <img
        className="w-full h-56 object-cover transform group-hover:opacity-75 duration-500"
        src={image}
        alt="FeatureCards"
      />
      <div>
        <div className="font-bold text-xl mb-2 text-center">{heading}</div>
        <p className="text-gray-700 text-base">{children}</p>
      </div>
    </div>
  );
};

export { Cards };
