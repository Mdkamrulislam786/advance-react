import React from "react";
import ErrorBoundary from "./Error-boundaries";
import Hero from "./Hero";

const HeroList = () => {
  return (
    <div style={{ margin: "0 auto" }}>
      <ErrorBoundary>
        <Hero heroName="SuperMan" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="BatMan" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
    </div>
  );
};

export default HeroList;
