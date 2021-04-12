import React from "react";

const Hero = ({ heroName }) => {
  if (heroName === "Joker") {
    throw new Error(`${heroName} is Not a hero`);
  }
  return <h5>{heroName}</h5>;
};

export default Hero;
