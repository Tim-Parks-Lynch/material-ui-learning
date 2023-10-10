import React from 'react';
import { Stack, CircularProgress, LinearProgress } from '@mui/material';

const MuiProgressIndicatior = () => {
  return (
    <Stack spacing={2}>
      <CircularProgress />
      <CircularProgress color="success" />
      <CircularProgress variant="determinate" value={30} color="success" />
      <LinearProgress sx={{ width: '30%' }} />
      <LinearProgress sx={{ width: '30%' }} color="success" />
      <LinearProgress sx={{ width: '30%' }} variant="determinate" value={30} color="success" />
    </Stack>
  );
};

export default MuiProgressIndicatior;
