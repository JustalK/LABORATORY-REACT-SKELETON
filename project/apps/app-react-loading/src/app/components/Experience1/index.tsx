import * as React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Experience1 = () => {
  return (
    <>
      <Skeleton />
      <Skeleton count={5} />
    </>
  );
};

export default Experience1;
