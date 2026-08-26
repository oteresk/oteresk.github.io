import { Box, Typography } from '@mui/material';
import { CERTIFICATES } from '../assets/constants';
import { StyledBox } from '../components/StyledBox';
import { SectionTitle } from '../components/SectionTitle';
import { onHoverShadow } from '../assets/styles';

export const Certificates = () => (
  <Box component="section" id="certificates" sx={{ scrollMarginTop: '120px' }}>
    <SectionTitle title="Certificates" />
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 190px), 1fr))',
        gap: '12px',
        maxWidth: '900px',
        mx: 'auto',
      }}
    >
      {CERTIFICATES.map((cert) => (
        <StyledBox
          key={cert.name}
          sx={{ ...onHoverShadow, padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}
        >
          <img
            src={cert.image}
            alt={`${cert.name} certificate`}
            loading="lazy"
            style={{ width: '100%', height: '100px', objectFit: 'contain' }}
          />
          <Typography variant="body3" component="p" sx={{ fontWeight: 500 }}>
            {cert.name}
          </Typography>
        </StyledBox>
      ))}
    </Box>
  </Box>
);
