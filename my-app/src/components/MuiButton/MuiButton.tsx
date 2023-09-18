import React, { useState } from 'react';
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Button,
  Grid,
  Stack,
  Typography,
  IconButton,
  ButtonGroup,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

const MuiButton = () => {
  // for Toggle Button and ToggleButton Group below
  const [formats, setFormats] = useState<string[]>([]);
  const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
    setFormats(updatedFormats);
  };

  // use below for exclusive keyword in Togggle Button Group
  // const [formats, setFormats] = useState<string | null>;

  // const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string | null) => {
  //   setFormats(updatedFormats);
  // };

  console.log(formats);

  return (
    //Below is for the different types of buttons, grid and stack are used for flex/grid layout in a nice page
    // Run this code to see the types of buttons
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

        <Grid item xs={4}>
          <Stack spacing={2} alignItems="center" flexWrap="wrap">
            <Typography variant="h4"> Icons w/ Buttons </Typography>
            <Stack spacing={1} flexWrap="wrap">
              <Button variant="contained" startIcon={<SendIcon />}>
                Send Icon before Send Text
              </Button>
              <Button variant="contained" endIcon={<SendIcon />}>
                Send Icon after Send Text
              </Button>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={4}>
          <Stack spacing={2} flexDirection="column" alignItems="center" flexWrap="wrap">
            <Typography variant="h4"> Icons as Buttons </Typography>
            {/* <Stack spacing={1} direction="row" justifyContent="center" flexWrap="wrap" useFlexGap> */}
            <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
              <IconButton aria-label="send" color="success" size="small">
                <SendIcon />
              </IconButton>
              <IconButton aria-label="send" color="primary" size="large">
                <SendIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Grid>

        {/* Button Group Example */}
        <Grid item xs={4}>
          <Stack spacing={2} alignItems="center" flexWrap="wrap">
            <Typography variant="h4"> Button Groups </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              <ButtonGroup
                aria-label="alignment button group"
                variant="contained"
                orientation="vertical"
                size="small"
                color="error"
              >
                <Button onClick={() => console.log('left clicked')}>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
              </ButtonGroup>
            </Stack>
          </Stack>
        </Grid>

        {/* Toggle Button Group Example, needs state, see useState above */}

        <Grid item xs={4}>
          <Stack spacing={2} alignItems="center" flexWrap="wrap">
            <Typography variant="h4">Toggle Button & Toggle Button Group </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              <ToggleButtonGroup
                size="small"
                aria-label="text-formating"
                value={formats}
                color="success"
                orientation="vertical"
                onChange={handleFormatChange}
                exclusive
              >
                <ToggleButton value="bold" aria-label="bold">
                  <FormatBoldIcon>Left</FormatBoldIcon>
                </ToggleButton>
                <ToggleButton value="italic" aria-label="italic">
                  <FormatItalicIcon>Left</FormatItalicIcon>
                </ToggleButton>
                <ToggleButton value="underlined" aria-label="underlined">
                  <FormatUnderlinedIcon>Left</FormatUnderlinedIcon>
                </ToggleButton>
              </ToggleButtonGroup>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MuiButton;
