import React from 'react';
import { Stack, Skeleton } from '@mui/material';

const MuiSkeleton = () => {
  return (
    <Stack spacing={1} width="250px">
      {/* default is text, animation is pulse */}
      <Skeleton />
      {/* circular variant - suitable for avatars*/}
      <Skeleton variant="circular" width={40} height={40} />
      {/* rectangular variant - suitable for images */}
      <Skeleton variant="rectangular" width={250} height={125} />

      {/* wave animation, can also be set to false */}
      <Skeleton animation="wave" />
      {/* circular variant with wave - suitable for avatars*/}
      <Skeleton animation="wave" variant="circular" width={40} height={40} />
      {/* rectangular variant with wave - suitable for images */}
      <Skeleton animation="wave" variant="rectangular" width={250} height={125} />
    </Stack>
  );
};

export default MuiSkeleton;
