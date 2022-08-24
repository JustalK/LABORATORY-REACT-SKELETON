import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import './style.css';

interface Experience {
  text: string;
}

const Experience = () => {
  const [data, setData] = useState<Experience>();

  const update = async () => {
    const result = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          text: 'whatever',
        });
      }, 2000);
    });
    setData(result as Experience);
  };

  useEffect(() => {
    update();
  }, [update]);

  return (
    <div>
      <h1 className="text">{data?.text || <Skeleton />}</h1>
    </div>
  );
};

export default Experience;
