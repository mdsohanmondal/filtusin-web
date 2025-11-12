import React from 'react';
import DiscoverCards from '../components/ui/Cards/DiscoverCards';

const Discover = () => {
  return (
    <div className="w-full py-20">
      <div className="heading w-full text-center flex flex-col justify-center items-center">
        <h1 className=" text-5xl text-[#F9FFE6] font-semibold">
          Discover
          <br />
          <span className="text-[#EAFF96]">What Sets Us Apart</span>
        </h1>
        <span className="font-light text-sm block mt-2 text-zinc-300 w-[30vw] text-center">
          we’re your partner in achieving a healthier, stronger, and more
          confident you. partner in achieving a healthier, stronger.
        </span>
      </div>
      <div className="cards mt-10 w-full flex items-center justify-between gap-8">
        <DiscoverCards />
        <DiscoverCards />
        <DiscoverCards />
        <DiscoverCards />
        <DiscoverCards />
        <DiscoverCards />
      </div>
    </div>
  );
};

export default Discover;
