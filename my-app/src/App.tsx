import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, createTheme, colors, ThemeProvider } from '@mui/material';
import Routing from './routes/Routing';
// import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { Css } from '@mui/icons-material';
import theme from './themes/NewThemeProvider';

// const theme = createTheme({
//   palette: {
//     secondary: {
//       main: colors.orange[500],
//     },
//   },
// });

const App = () => {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </ThemeProvider>
    </CssBaseline>
  );
};

export default App;
