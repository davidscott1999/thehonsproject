import React from 'react';

import { Cards } from '../Cards/Cards';

const munros = "media/munros.jpg";
const mountainSafety = "media/sar-helicopter.jpg";
const contactUs = "media/contact-us.jpg";

const FeatureCards = ({ className }) => {
  return (
    <div className={className}>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 mx-auto">
        <Cards heading="Munros" image={munros}>
          <p>
            The Munros are the mountains in Scotland over 3000 feet high, with
            there being a total of 282 Munros across Scotland. Your challenge
            starts today. Find out more
            <a href="/munros"> here</a>.
          </p>
        </Cards>
        <Cards heading="Mountain Safety" image={mountainSafety}>
          <p>
            The hills is the perfect remedy to the hectic lives we lead and has
            been proven to enhance our well-being, but we must be prepared as
            the mountain environment can change very quickly. Find out more
            <a href="/safety"> here</a>.
          </p>
        </Cards>
        <Cards heading="Contact Us" image={contactUs}>
          <p>
            Contact Munro Baggers today, whatever your query and we'll get you
            the help you need. We look forward to hearing from you. Contact us
            <a href="/contact"> here</a>.
          </p>
        </Cards>
      </div>
    </div>
  );
};

export { FeatureCards };
