import React from "react";

const Cards = ({ image, children, heading }) => {
  return (
    <div className="rounded group overflow-hidden shadow-lg bg-gray-200 hover:bg-gray-400 duration-400 pb-4">
      <img
        class="w-full h-56 object-cover transform group-hover:opacity-75 duration-500"
        src={image}
        alt="featureCards"
      />
      <div>
        <div class="font-bold font-family: ui-serif m-1.5">{heading}</div>
        <p class="text-gray-800 text-base">{children}</p>
      </div>
    </div>
  );
};

export { Cards };
