import { createMuiTheme } from '@material-ui/core/styles';


//Customize color for table
export const Theme = createMuiTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#212121',
        white: '#FFFFFF',
        contrastText: '#fff',
        primary: '#1b3c6b',
        primaryLight: '#adceff',
        secondary: '#2a5da6',
        tertiary: '#bf1e2e',
        tertiaryLight: '#c35f69',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });