import * as React from 'react';
import Skeleton from 'react-loading-skeleton';
import './style.css';

const Experience1 = () => {
  return (
    <>
      <Skeleton />
      <Skeleton circle width={40} height={40} />
      <Skeleton width={210} height={60} />
      <Skeleton className="rls-rectangle" />
      <Skeleton count={5} />
    </>
  );
};

export default Experience1;
