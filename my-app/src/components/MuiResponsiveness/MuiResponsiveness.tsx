import React from 'react';
import { Box } from '@mui/material';

const MuiResponsiveness = () => {
  return (
    <Box
      sx={{
        height: '300px',
        width: {
          xs: 100, // applies when width is above 0
          sm: 200, // applies when width is above 600
          md: 300, // applies when width is above 900
          lg: 400, // applies when width is above 1200
          xl: 500, // applies when width is above 1536
        },
        bgcolor: 'primary.main',
      }}
    ></Box>
  );
};

export default MuiResponsiveness;
