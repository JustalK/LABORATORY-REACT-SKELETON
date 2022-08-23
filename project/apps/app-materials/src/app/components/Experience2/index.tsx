import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import styles from './styles.module.css';
import './experience2.css';

const Experience1 = () => {
  return (
    <>
      <Stack spacing={1}>
        {/* With styles CSS */}
        <Skeleton variant="text" className={styles['text']} />
        <Skeleton variant="circular" className={styles['circular']} />
        <Skeleton variant="rectangular" className={styles['rectangular']} />
        <Skeleton variant="rounded" className={styles['rounded']} />
      </Stack>
      <Stack spacing={1}>
        {/* With normal CSS */}
        <Skeleton variant="text" className="text" />
        <Skeleton variant="circular" className="circular" />
        <Skeleton variant="rectangular" className="rectangular" />
        <Skeleton variant="rounded" className="rounded" />
      </Stack>
    </>
  );
};

export default Experience1;
