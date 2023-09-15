import React from 'react';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
const MuiButton = () => {
  return (
    <Box>
      <Typography variant="h1" sx={{ m: '4rem', textDecoration: 'underline', textAlign: 'center' }}>
        All Button Types{' '}
      </Typography>

      <Grid container rowSpacing={10} columnSpacing={{ xs: 6 }}>
        <Grid item xs={4}>
          <Stack spacing={1} alignItems="center">
            <Typography variant="h4">Button Variant Types</Typography>
            <Button variant="text" href="https://google.com">
              Text Button Variant
            </Button>
            <Button variant="contained">Contained Button Variant</Button>
            <Button variant="outlined" color={'error'}>
              Outline Button Variant with color
            </Button>
          </Stack>
        </Grid>

        <Grid item xs={4}>
          <Stack spacing={2} alignItems="center">
            <Typography variant="h4">Contained Var. w/ Palette</Typography>
            <Stack spacing={1} direction="row" justifyContent="center" flexWrap="wrap" useFlexGap>
              <Button variant="contained" color="primary" sx={{ width: 'fit-content' }}>
                Primary
              </Button>
              <Button variant="contained" color="secondary" sx={{ width: 'fit-content' }}>
                Secondary
              </Button>
              <Button variant="contained" color="error">
                Error
              </Button>
              <Button variant="contained" color="warning">
                Warning
              </Button>
              <Button variant="contained" color="info">
                Info
              </Button>
              <Button variant="contained" color="success">
                Success
              </Button>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={4}>
          <Stack spacing={2} alignItems="center" flexWrap="wrap">
            <Typography variant="h4">Outlined Var. w/ Palettes</Typography>
            <Stack spacing={1} direction="row" justifyContent="center" flexWrap="wrap" useFlexGap>
              <Button variant="outlined" color="primary">
                Primary
              </Button>
              <Button variant="outlined" color="secondary">
                Secondary
              </Button>
              <Button variant="outlined" color="error">
                Error
              </Button>
              <Button variant="outlined" color="warning">
                Warning
              </Button>
              <Button variant="outlined" color="info">
                Info
              </Button>
              <Button variant="outlined" color="success">
                Success
              </Button>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={4}>
          <Stack spacing={2} alignItems="center" flexWrap="wrap">
            <Typography variant="h4">Text Var. w/ Palettes</Typography>
            <Stack
              spacing={2}
              width="60%"
              direction="row"
              justifyContent="center"
              alignContent="center"
              flexWrap="wrap"
            >
              <Button variant="text" color="primary">
                Primary
              </Button>
              <Button variant="text" color="secondary">
                Secondary
              </Button>
              <Button variant="text" color="error">
                Error
              </Button>
              <Button variant="text" color="warning">
                Warning
              </Button>
              <Button variant="text" color="info">
                Info
              </Button>
              <Button variant="text" color="success">
                Success
              </Button>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={4}>
          <Stack spacing={2} alignItems="center" flexWrap="wrap">
            <Typography variant="h4">Size Var. w/ Contained</Typography>
            <Button variant="contained" size="small">
              Small contained
            </Button>
            <Button variant="contained" size="medium">
              Medium contained
            </Button>
            <Button variant="contained" size="large">
              Large contained
            </Button>
          </Stack>
        </Grid>

        <Grid item xs={4}>
          <Stack spacing={2} alignItems="center" flexWrap="wrap">
            <Typography variant="h4">Size Var. w/ Outlined</Typography>
            <Button variant="outlined" size="small">
              Small outlined
            </Button>
            <Button variant="outlined" size="medium">
              Medium outlined
            </Button>
            <Button variant="outlined" size="large">
              Large outlined
            </Button>
          </Stack>
        </Grid>

        <Grid item xs={4}>
          <Stack spacing={2} alignItems="center" flexWrap="wrap">
            <Typography variant="h4">Size Var w/ Text</Typography>
            <Stack spacing={1} direction="row" justifyContent="center" flexWrap="wrap">
              <Button variant="text" size="small">
                Small Text
              </Button>
              <Button variant="text" size="medium">
                Medium Text
              </Button>
              <Button variant="text" size="small">
                Large Text
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MuiButton;
