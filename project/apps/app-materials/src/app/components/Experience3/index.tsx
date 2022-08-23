import { useState, useEffect } from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import './style.css';

interface Experience {
  text: string;
  circular: string;
  rectangular: string;
  rounded: string;
}

const Experience1 = () => {
  const [data, setData] = useState<Experience>();

  const update = async () => {
    const result = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          text: 'whatever',
          circular:
            'https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg',
          rectangular:
            'https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512',
          rounded:
            'https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512',
        });
      }, 2000);
    });
    setData(result as Experience);
  };

  useEffect(() => {
    update();
  }, [update]);

  return data ? (
    <div>
      <div className="text">{data.text}</div>
      <img src={data.circular} className="circular" />
      <img src={data.rectangular} className="rectangular" />
      <img src={data.rounded} className="rounded" />
    </div>
  ) : (
    <Stack spacing={1}>
      <Skeleton variant="text" className="text" />
      <Skeleton variant="circular" className="circular" />
      <Skeleton variant="rectangular" className="rectangular" />
      <Skeleton variant="rounded" className="rounded" />
    </Stack>
  );
};

export default Experience1;
