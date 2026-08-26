import { createTheme, responsiveFontSizes } from '@mui/material';

const POPPINS = ['Poppins', 'sans-serif'].join(',');

let theme = createTheme(
  {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
        xxl: 1750,
      },
    },
    typography: {
      primary: {
        fontFamily: POPPINS,
        fontWeightLight: 200,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
      },
      h1: { // name, section title
        fontFamily: POPPINS,
        fontSize: '3rem',
        fontWeight: 600,
        background: 'linear-gradient(to bottom, transparent 50%, #c8c8c8 50%)',
        display:'inline',
      },
      h2: { // nav title
        fontFamily: POPPINS,
        fontSize: '2rem',
        fontWeight: 500,
      },
      title1: { // Exp Company, Case study title
        fontFamily: POPPINS,
        fontSize: '25px',
        fontWeight: 500,
        color: '#000000',
      },
      title2: { // Exp Role, Proj Title, Certificate Title
        fontFamily: POPPINS,
        fontSize: '20px',
        fontWeight: 500,
        color: '#000000',
      },
      title3: { // sub-heading inside a card or case study
        fontFamily: POPPINS,
        fontSize: '18px',
        fontWeight: 600,
        color: '#000000',
      },
      body1: { // Bio desc
        fontFamily: POPPINS,
        fontSize: '1.5rem',
        fontWeight: 200,
        color: '#000000',
      },
      body2: { // Experience Date
        fontFamily: POPPINS,
        fontWeight: 400,
        fontSize: '20px',
        color: '#000000'
      },
      body3: { // Project Popup desc, card bullets
        fontFamily: POPPINS,
        fontWeight: 400,
        fontSize: '17px',
        color: '#000000'
      },
      bullet: {
        fontFamily: POPPINS,
        fontWeight: 400,
        fontSize: '20px',
        color: '#000000'
      },
      prose: { // case study paragraphs
        fontFamily: POPPINS,
        fontWeight: 400,
        fontSize: '17px',
        lineHeight: 1.6,
        color: '#000000',
      },
      stat: { // the big hero / case study figure
        fontFamily: POPPINS,
        fontWeight: 600,
        fontSize: '2.25rem',
        lineHeight: 1.1,
        color: '#000000',
      },
      statLabel: {
        fontFamily: POPPINS,
        fontWeight: 500,
        fontSize: '16px',
        color: '#000000',
      },
      meta: { // dates, org lines, quiet supporting text
        fontFamily: POPPINS,
        fontWeight: 400,
        fontSize: '14px',
        color: '#5c5e66',
      },
      pill: { // chip label
        fontFamily: POPPINS,
        fontWeight: 500,
        fontSize: '13px',
        color: '#000000',
      },
      navItem: {
        fontFamily: POPPINS,
        fontWeight: 500,
        fontSize: '16px',
        color: 'black',
        '&:hover': {
          color: '#c8c8c8',
        }
      },
      button: {
        fontFamily: POPPINS,
        fontSize: '16px',
        textTransform: 'none',
        color: 'black',
      }
    },
    palette: {
      primary: {
        main: '#F5F5F5',
        light: '',
        dark: '',
        contrastText: '#000000'
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          /*
            primary.main is a near-white (#F5F5F5) because contained buttons use
            it as their BACKGROUND. A text-variant button uses it as the text
            colour instead, which renders white-on-white. Pin text buttons to
            the body colour so that can't happen again.
          */
          text: { color: '#000000' },
        },
      },
    }
  }
);

theme = responsiveFontSizes(theme);
export default theme;
