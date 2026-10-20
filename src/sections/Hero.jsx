import { Box, Button, Chip, Grid2, Typography } from '@mui/material';
import { AVAILABILITY, INTRO_BLURB, LINKS, STATS } from '../assets/constants';
import { PROJECTS } from '../assets/projects';
import { StyledBox } from '../components/StyledBox';
import DavidImg from '../assets/images/davidheadshot.webp';
import { availabilityPill, roundWhiteButton } from '../assets/styles';

// Driven by the project data: any project with a heroFrame joins the band, in order.
// Add a project with a heroFrame and the band updates itself.
const BAND = PROJECTS.filter((p) => p.heroFrame);

const CreditBand = () => (
  <Box
    sx={{
      // Hidden on phones: stacked it ate the whole first screen before the name.
      // Project cards carry the game art on mobile instead.
      display: { xs: 'none', sm: 'grid' },
      gridTemplateColumns: `repeat(${BAND.length}, 1fr)`,
      position: 'relative',
      borderRadius: '1rem 1rem 0 0',
      overflow: 'hidden',
      // the work is the only colour on the page, so let it fade into the card
      '&::after': {
        content: '""',
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        background: 'linear-gradient(to top, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0) 42%)',
      },
    }}
  >
    {BAND.map((p) => (
      <Box key={p.title} sx={{ position: 'relative', overflow: 'hidden' }}>
        <Box
          component="img"
          src={p.heroFrame}
          alt={`${p.title}, ${p.status}`}
          sx={{
            width: '100%',
            height: { sm: '170px', lg: '210px' },
            objectFit: 'cover',
            display: 'block',
          }}
        />
        <Typography
          variant="pill"
          component="p"
          sx={{
            position: 'absolute',
            left: '14px',
            bottom: '10px',
            color: '#fff',
            fontSize: '12px',
            letterSpacing: '.02em',
            textShadow: '0 1px 6px rgba(0,0,0,0.85)',
          }}
        >
          {p.heroCaption}
        </Typography>
      </Box>
    ))}
  </Box>
);

const Stat = ({ stat }) => (
  <Box sx={{ flex: '1 1 160px', minWidth: '160px' }}>
    <Typography variant="stat" component="p">
      {stat.value}
    </Typography>
    <Typography variant="statLabel" component="p">
      {stat.label}
    </Typography>
    <Typography variant="meta" component="p" sx={{ mt: '2px' }}>
      {stat.detail}
    </Typography>
  </Box>
);

export const Hero = () => (
  <Box component="section" id="about" sx={{ scrollMarginTop: '120px' }}>
    <StyledBox padding="0" sx={{ maxWidth: '100%', overflow: 'hidden' }}>
      <CreditBand />

      <Box sx={{ p: { xs: '22px', md: '28px' } }}>
        <Grid2 container spacing="24px" alignItems="flex-start">
          <Grid2 size={{ xs: 12, md: 8 }} sx={{ textAlign: 'left' }}>
            <Chip label={AVAILABILITY} size="small" sx={{ ...availabilityPill, mb: '14px' }} />
            <Typography variant="h1" component="h1" sx={{ display: 'block' }}>
              David Koster
            </Typography>
            {/* bio sits beside the headshot, not under it, or the column leaves a dead gap */}
            <Typography variant="body1" component="p" sx={{ mt: '20px' }}>
              {INTRO_BLURB}
            </Typography>
          </Grid2>

          <Grid2
            size={{ xs: 12, md: 4 }}
            sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}
          >
            <Box
              component="img"
              src={DavidImg}
              alt="David Koster"
              sx={{
                width: '100%',
                maxWidth: { xs: '200px', md: '230px' },
                aspectRatio: '1 / 1',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
          </Grid2>

          <Grid2 size={12} sx={{ textAlign: 'left' }}>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                py: '22px',
                borderTop: '1px solid rgba(0,0,0,0.08)',
                borderBottom: '1px solid rgba(0,0,0,0.08)',
                textAlign: { xs: 'center', md: 'left' },
                mt: 0,
              }}
            >
              {STATS.map((s) => (
                <Stat stat={s} key={s.label} />
              ))}
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                marginTop: '20px',
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              {LINKS.map((link) => (
                <Button
                  key={`button::${link.name}`}
                  variant="outlined"
                  size="small"
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  sx={{ color: 'black', ...roundWhiteButton, '&:hover': { backgroundColor: 'white' } }}
                >
                  {link.name}
                </Button>
              ))}
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </StyledBox>
  </Box>
);
