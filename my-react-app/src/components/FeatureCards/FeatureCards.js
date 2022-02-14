import React from 'react';

import { Cards } from '../Cards/Cards';

const munroCardRef = [
  "https://firebasestorage.googleapis.com/v0/b/auth-development-980d7.appspot.com/o/munros.jpg?alt=media&token=2bf05331-5cca-4521-a22f-8e47646b674f",
];

const safetyCardRef = [
  "https://firebasestorage.googleapis.com/v0/b/auth-development-980d7.appspot.com/o/sar-helicopter.jpg?alt=media&token=15f84ea0-e592-4668-bf4f-9b86198f1210",
];

const contactUsCardRef = [
  "https://firebasestorage.googleapis.com/v0/b/auth-development-980d7.appspot.com/o/contact-us.jpg?alt=media&token=ed2c2850-1cc7-4c44-9b44-f0edb27e58b5",
];

const FeatureCards = ({ className }) => {
  return (
    <div className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 mx-auto">
        <Cards heading="Munros" image={munroCardRef}>
          <p>
            The Munros are the mountains in Scotland over 3000 feet high, with
            there being a total of 282 Munros across Scotland. Your challenge
            starts today. Find out more
            <a href="/munros"> here</a>.
          </p>
        </Cards>
        <Cards heading="Mountain Safety" image={safetyCardRef}>
          <p>
            The hills is the perfect remedy to the hectic lives we lead and has
            been proven to enhance our well-being, but we must be prepared as
            the mountain environment can change very quickly. Find out more
            <a href="/safety"> here</a>.
          </p>
        </Cards>
        <Cards heading="Contact Us" image={contactUsCardRef}>
          <p>
            Contact Munro Baggers today, whatever your query and we'll get you
            the help you need. We look forward to hearing from you. Contact us
            <a href="/contact-us"> here</a>.
          </p>
        </Cards>
      </div>
    </div>
  );
};

export { FeatureCards };
