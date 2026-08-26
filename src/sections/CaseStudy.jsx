import { Box, Typography } from '@mui/material';
import { StyledBox } from '../components/StyledBox';
import { SectionTitle } from '../components/SectionTitle';
import { CASE_STUDIES } from '../assets/casestudy';

const Metric = ({ m }) => (
  <Box sx={{ flex: '1 1 140px', minWidth: '140px' }}>
    <Typography variant="stat" component="p">{m.value}</Typography>
    <Typography variant="meta" component="p">{m.label}</Typography>
  </Box>
);

const Study = ({ study }) => (
  <StyledBox sx={{ textAlign: 'left', maxWidth: '80ch', mx: 'auto', width: '100%' }}>
    <Typography variant="title1" component="h3" sx={{ display: 'block' }}>
      {study.title}
    </Typography>
    <Typography variant="meta" component="p" sx={{ mb: '20px' }}>{study.subtitle}</Typography>

    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        py: '18px',
        mb: '24px',
        borderTop: '1px solid rgba(0,0,0,0.08)',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
      }}
    >
      {study.metrics.map((m) => (
        <Metric m={m} key={m.label} />
      ))}
    </Box>

    {study.sections.map((s) => (
      <Box key={s.heading} sx={{ mb: '28px' }}>
        <Typography variant="title3" component="h4" sx={{ display: 'block', mb: '8px' }}>{s.heading}</Typography>
        {s.body?.map((p) => (
          <Typography variant="prose" component="p" key={p} sx={{ mb: '10px' }}>
            {p}
          </Typography>
        ))}
        {s.bullets && (
          <Box component="ul" sx={{ pl: '20px', m: 0 }}>
            {s.bullets.map((b) => (
              <Typography variant="prose" component="li" key={b} sx={{ mb: '8px' }}>
                {b}
              </Typography>
            ))}
          </Box>
        )}
      </Box>
    ))}
  </StyledBox>
);

export const CaseStudy = () => (
  <Box component="section" id="casestudy" sx={{ scrollMarginTop: '110px' }}>
    <SectionTitle title="Case Studies" />
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {CASE_STUDIES.map((study) => (
        <Study study={study} key={study.id} />
      ))}
    </Box>
  </Box>
);
