import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import styles from './styles.module.css';

const Experience1 = () => {
  return (
    <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" className={styles['text']} />

      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" className={styles['circular']} />
      <Skeleton variant="rectangular" className={styles['rectangular']} />
      <Skeleton variant="rounded" className={styles['rounded']} />
    </Stack>
  );
};

export default Experience1;
