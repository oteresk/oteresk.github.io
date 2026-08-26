import { Box, Button, Typography } from '@mui/material';
import { EXPERIENCE } from '../assets/experience';
import { ExperienceCard } from '../components/ExperienceCard';
import { SectionTitle } from '../components/SectionTitle';
import { StyledBox } from '../components/StyledBox';

export const Experience = () => (
  <Box component="section" id="experience" sx={{ scrollMarginTop: '120px' }}>
    <SectionTitle title="Experience" />
    {/*
      Single column timeline. The masonry columns this used to need went away
      with the bullet lists - the rows are uniform now.
    */}
    <StyledBox sx={{ maxWidth: '80ch', mx: 'auto', width: '100%', padding: { xs: '20px', sm: '28px' } }}>
      {EXPERIENCE.map((exp, i) => (
        <ExperienceCard exp={exp} key={exp.title} last={i === EXPERIENCE.length - 1} />
      ))}

      <Box sx={{ mt: '24px', pt: '18px', borderTop: '1px solid rgba(0,0,0,0.08)', textAlign: 'left' }}>
        <Typography variant="meta" component="span">
          Detailed responsibilities for each role are in my resume.
        </Typography>
        <Button
          href="/resume.pdf"
          size="small"
          sx={{ textTransform: 'none', ml: '4px', px: '6px', fontWeight: 500 }}
        >
          View resume →
        </Button>
      </Box>
    </StyledBox>
  </Box>
);
