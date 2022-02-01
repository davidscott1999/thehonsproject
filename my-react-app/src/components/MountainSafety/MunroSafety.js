import React from 'react';

import { Cards } from '../Cards/Cards';

const MunroSafety = ({ className }) => {
  const infoServiceRef =
    "https://firebasestorage.googleapis.com/v0/b/auth-development-980d7.appspot.com/o/scottish-highlands.jpg?alt=media&token=6a457d0f-d59a-42c4-863c-24acabf7d261";

  const mounteeringScotCardRef = [
    "https://firebasestorage.googleapis.com/v0/b/auth-development-980d7.appspot.com/o/58c0674d-Helicopter-1.jfif?alt=media&token=a2cc493b-a227-4ccf-b490-0f58a40cf515",
  ];

  const avalancheServiceCardRef = [
    "https://firebasestorage.googleapis.com/v0/b/auth-development-980d7.appspot.com/o/avalanche.jpg?alt=media&token=47a456af-86c1-448a-bdcd-17b8150ff28b",
  ];

  const safetyAndAdviceCardRef = [
    "https://firebasestorage.googleapis.com/v0/b/auth-development-980d7.appspot.com/o/mountainAdvice.jpg?alt=media&token=852ccf9b-acd0-4c05-89c7-dda0dc8bff69",
  ];

  const safteySkillsCardRef = [
    "https://firebasestorage.googleapis.com/v0/b/auth-development-980d7.appspot.com/o/district-mountains.jpg?alt=media&token=6d88074d-d1b2-4e7d-ba37-601093f7d8f7",
  ];

  const emergencyCardRef = [
    "https://firebasestorage.googleapis.com/v0/b/auth-development-980d7.appspot.com/o/emergency.jpg?alt=media&token=b2726c7b-4f5b-4e1f-829e-c89205a7ce56",
  ];

  return (
    <div className="className">
      <section className="w-full text-gray-900 py-38 bg-center bg-cover bg-no-repeat bg-red-600">
        <div className="mt-4">
          <h1 className="text-bold text-black text-center text-4xl">
            IN AN EMERGENCY, dial 999, ask for POLICE, then ask for MOUNTAIN
            RESCUE!
          </h1>
        </div>
      </section>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 mx-auto mt-3 mb-3 ml-2 mr-2">
        <Cards heading="Mountain Weather Info Service" image={infoServiceRef}>
          <p>
            The Mountain Weather Information Service provides weather forecasts
            to aid mountain safety for 10 upland regions across the UK. MWIS
            forecasts contain detailed and accessible information aimed at both
            novice and experienced mountain users. Find out more
            <a href="https://www.mwis.org.uk/"> here</a>.
          </p>
        </Cards>
        <Cards
          heading="Volunteering for the SMR"
          image={mounteeringScotCardRef}
        >
          <p>
            Whether you are interested in joining a team, becoming a fundraising
            volunteer and supporting to raise money, helping with admin, or
            offering your skills to support the running of Scottish Mountain
            Rescue, there are lots of ways to get involved for the SMR. Find out
            more
            <a href="https://www.scottishmountainrescue.org/volunteering">
              {" "}
              here
            </a>
            .
          </p>
        </Cards>
        <Cards
          heading="Scottish Avalanche Service"
          image={avalancheServiceCardRef}
        >
          <p>
            The SAIS publish daily reports of observed and forecast, avalanche,
            snow, and mountain conditions for the 5 most popular mountain areas
            of Scotland. Find out more
            <a href="https://www.sais.gov.uk/"> here</a>.
          </p>
        </Cards>
        <Cards
          heading="Mountain Safety & Advice"
          image={safetyAndAdviceCardRef}
        >
          <p>
            The hills is the perfect remedy to the hectic lives we lead and has
            been proven to enhance our well-being, but we must be prepared as
            the mountain environment can change very quickly. Find out more
            <a href="https://www.scottishmountainrescue.org/mountain-safety-advice">
              {" "}
              here
            </a>
            .
          </p>
        </Cards>
        <Cards heading="Mountaineering Scotland" image={safteySkillsCardRef}>
          <p>
            The essential skills you should master, including navigation and a
            knowledge of the effects of weather and conditions, along with ways
            to avoid or cope with any risks involved. Where you lack particular
            skills, it may be that one of our courses can fill in the gaps in
            your knowledge or help you hone and refresh existing skills. Start
            your learning
            <a href="https://www.mountaineering.scot/safety-and-skills">
              {" "}
              here
            </a>
            .
          </p>
        </Cards>
        <Cards heading="Emergency" image={emergencyCardRef}>
          <p>
            Scotland is a popular area for climbers and walkers. However, the
            weather can change quickly. A sunny day's hillwalking or climbing
            can become dangerous. You should take precautions before heading
            into the wilderness. This will ensure you won't need an emergency
            search and rescue. Find out more
            <a href="https://www.scotland.police.uk/advice-and-information/hill-walking/">
              {" "}
              here
            </a>
            .
          </p>
        </Cards>
      </div>
    </div>
  );
};

export default MunroSafety;
