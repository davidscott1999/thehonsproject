import React from 'react';

const Cards = ({ image, children, heading }) => {
  return (
    <section className="w-full text-gray-900 py-20 bg-center bg-cover bg-no-repeat">
      <div className="lg:w-3/6 xl:w-2/5 md:w-full bg-gray-500 p-8 flex flex-col lg:ml-10 w-full mt-10 lg:mt-0 rounded-md">
        <img
          class="w-full h-56 object-cover transform group-hover:opacity-75 duration-500"
          src={image}
          alt="featureCards"
        />
        <div>
          <div class="font-bold font-family: ui-serif text-centre">
            {heading}
          </div>
          <p class="text-gray-800 text-base">{children}</p>
        </div>
      </div>
    </section>
  );
};

export { Cards };
