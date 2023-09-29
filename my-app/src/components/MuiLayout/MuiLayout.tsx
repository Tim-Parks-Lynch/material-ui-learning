import { Box, Stack, Divider, Grid, Paper } from '@mui/material';
import React from 'react';

const MuiLayout = () => {
  return (
    <Paper sx={{ padding: '32px', height: '500px' }} elevation={4}>
      <Box>
        {/* Basic - shows as div in html */}
        <Box>Box is a layout component</Box>
        {/* Basic - shows as span in html */}
        <Box component="span">Box is a layout component</Box>
        {/* // used for laying out in one direction
      // vertically or horizontally but not both
    // might not be noticeable but puts them in a column by default */}
        <Stack sx={{ border: '1px solid red' }}>
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
        </Stack>
        {/* System properties and shortcuts, look them up they save time */}
        {/* bgcolor and p are examples of system properties */}
        <Box display="flex" height="100px" width="100px" bgcolor="success.light" p={2}>
          {`I'm a box component with system properites`}
        </Box>

        {/* direction prop for stack, col by default, can also be row or other flexbox values
      like row-reverse, space-between, etc*/}
        {/* spacing adds by default 8px times whatever value you have in spacing prop making
      the below a 16px spacing */}
        {/* divider prop adds a divider between each child element in the stack */}
        {/* system props can also be used here like mx, my, pl, pr, etc */}
        <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
          {/* duplicated for stack example */}
          <Box display="flex" height="100px" width="100px" bgcolor="success.light" p={2}>
            {`I'm a box component with system properites`}
          </Box>
          {/* duplicated for stack example */}
          <Box display="flex" height="100px" width="100px" bgcolor="success.light" p={2}>
            {`I'm a box component with system properites`}
          </Box>
        </Stack>
      </Box>

      <Grid container my={10}>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
      {/* grid container showing reactiveness using multiple breakpoints on the grid items */}
      <Grid container my={10}>
        <Grid item xs={12} sm={6} md={3}>
          <Box bgcolor="primary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box bgcolor="primary.light" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box bgcolor="primary.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box bgcolor="primary.light" p={2}>
            Item 4
          </Box>
        </Grid>

        {/* grid container showing reactiveness using multiple breakpoints on the grid container */}
        <Grid container my={10}>
          <Grid item xs={12} sm={6} md={3}>
            <Box bgcolor="primary.light" p={2}>
              Item 1
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box bgcolor="primary.light" p={2}>
              Item 2
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box bgcolor="primary.light" p={2}>
              Item 3
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box bgcolor="primary.light" p={2}>
              Item 4
            </Box>
          </Grid>
        </Grid>
        {/* grid container showing reactiveness using auto layout making each col equal width 
         if you set one column to be a certain width the rest will adjust around that column*/}
        <Grid container my={10}>
          <Grid item xs>
            <Box bgcolor="primary.light" p={2}>
              Item 1
            </Box>
          </Grid>
          {/* example of it adjusting around this one column, could also
          be set to auto which would make it take up only the width of the items inside of it */}
          <Grid item xs={4}>
            <Box bgcolor="primary.light" p={2}>
              Item 2
            </Box>
          </Grid>
          <Grid item xs>
            <Box bgcolor="primary.light" p={2}>
              Item 3
            </Box>
          </Grid>
          <Grid item xs>
            <Box bgcolor="primary.light" p={2}>
              Item 4
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MuiLayout;
