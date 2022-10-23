import { createTheme } from '@mui/material';
import { green, pink } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: pink[300],
    },
    secondary: {
      main: green[600],
    },
  },
});

export default theme;
