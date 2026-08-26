import './App.css';
import { Box } from '@mui/material';
import { NavBar } from './components/NavBar';
import { Hero } from './sections/Hero';
import { SubHero } from './sections/SubHero';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { CaseStudy } from './sections/CaseStudy';
import { Certificates } from './sections/Certificates';
import { StyledBox } from './components/StyledBox';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '100%',
        alignItems: 'center',
        background: 'radial-gradient(circle, rgba(170,170,170,1) 0%, rgba(255,255,255,1) 100%)',
        minHeight: '100vh',
      }}
    >
      <Box component="span" id="home" />
      <NavBar />
      <StyledBox
        component="main"
        sx={{
          width: '92%',
          maxWidth: '1400px',
          mb: '40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '56px',
          background: 'rgba(255, 255, 255, 0.5)',
          padding: { xs: '20px', md: '32px' },
        }}
      >
        <Hero />
        <SubHero />
        <Experience />
        <Projects />
        <CaseStudy />
        <Certificates />
      </StyledBox>
    </Box>
  );
}

export default App;
