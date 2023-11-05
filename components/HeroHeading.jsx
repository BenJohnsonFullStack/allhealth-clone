import React from "react";

const HeroHeading = ({ title }) => {
  return (
    <div className="w-[63%] lg:w-[45%] pb-12 md:pb-20 lg:pb-32 pt-24 lg:pt-40 mx-auto text-left text-white relative">
      <h1 className="text-xl md:text-[1.6rem] lg:text-[2rem] font-bold">
        {title}
      </h1>
    </div>
  );
};

export default HeroHeading;
