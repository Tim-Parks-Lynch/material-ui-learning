import { Box } from '@mui/material';
import React from 'react';

const MuiLayout = () => {
  return (
    <Box>
      {/* Basic - shows as div in html */}
      <Box>Box is a layout component</Box>
      {/* Basic - shows as span in html */}
      <Box component="span">Box is a layout component</Box>
      {/* SX PROP */}
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          height: '100px',
          width: '100px',
          padding: '16px',
          '&:hover': {
            backgroundColor: 'primary.light',
          },
        }}
      >
        Box is a layout component
      </Box>
      {/* Flex container */}
      <Box display="flex" height="100px" width="100px">
        {`I'm a box component that is a flex container`}
      </Box>
      {/* System properties and shortcuts, look them up they save time */}
      {/* bgcolor and p are examples of system properties */}
      <Box display="flex" height="100px" width="100px" bgcolor="success.light" p={2}>
        {`I'm a box component with system properites`}
      </Box>
    </Box>
  );
};

export default MuiLayout;
