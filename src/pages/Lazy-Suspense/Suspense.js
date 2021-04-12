import React, { Suspense, lazy } from "react";
import ErrorBoundary from "../Error-boundaries/Error-boundaries";

const HeroList = lazy(() => import("../Error-boundaries/HeroList"));

const MySuspense = () => (
  <div style={{display:'grid', placeItems:'center'}}>
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroList />
      </Suspense>
    </ErrorBoundary>
  </div>
);

export default MySuspense;
