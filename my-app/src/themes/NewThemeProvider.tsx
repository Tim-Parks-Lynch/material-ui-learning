import { createTheme, colors } from '@mui/material';

//Creating primary theme with palette

const theme = createTheme({
  palette: {
    primary: {
      //   main: '#324A5F',
      main: '#274060',
      contrastText: '#fff',
    },
    secondary: {
      //   main: '#36A5DB',
      //   main: '#5C9EAD',
      main: '#335C81',
      contrastText: '#fff',
    },
    error: {
      //   main: '#D32F2F',
      //   main: '#52050A',
      //   main: '#32021F',
      //   main: '#611C35',
      main: '#F07167',
      contrastText: '#fff',
    },
    warning: {
      //   main: '#D5573B',
      //   main: '#F07167',
      //   main: '#E5D352',
      main: '#FFCB77',
      contrastText: '#fff',
    },
    // warning: {
    //   main: '#E39774',
    //   main: 'D5573B',
    // },
    info: {
      //   main: '#E4E9B2',
      //   main: '#E0D2CE',
      //   main: '#fff',
      contrastText: '#fff',
      //   main: '#1446A0',
      //   main: '#B1DDF1',
      main: '#46ACC2',
    },
    success: {
      //   main: '#E4E9B2',
      //   main: '#D0E562',
      //   main: '#5DFDCB',
      //   main: '#4E5340',
      //   main: '#3f4531',
      //   main: '#8f2d56',
      //   main: '#2F4B26',
      main: '#70AE6E',
      contrastText: '#fff',
    },
  },
});

export default theme;

// 343f3E
// '#4E5340'

//Take These
// #F4F4F8
// #5C9EAD
