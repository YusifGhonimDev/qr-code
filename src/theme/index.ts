import { createTheme } from '@mui/material';

declare module '@mui/material' {
  interface PaletteOptions {
    lightGrey: string;
    greyishBlue: string;
    darkBlue: string;
  }
}

const theme = createTheme({
  palette: {
    lightGrey: 'hsl(212, 45%, 89%)',
    greyishBlue: 'hsl(220, 15%, 55%)',
    darkBlue: 'hsl(218, 44%, 22%)',
  },
  typography: {
    fontSize: 15,
    fontFamily: 'Outfit',
  },
});

export default theme;
