import { Box, Button, Chip, Dialog, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import youtubeLogo from '../assets/images/links/YouTube-Logo.webp';
import itchLogo from '../assets/images/links/itch.webp';
import steamLogo from '../assets/images/links/steam.webp';
import kickStarterLogo from '../assets/images/links/kickstarter.webp';
import metaLogo from '../assets/images/links/meta.webp';
import { pill } from '../assets/styles';

const LINK_IMG = {
  youtube: youtubeLogo,
  itch: itchLogo,
  kickstarter: kickStarterLogo,
  meta: metaLogo,
  steam: steamLogo,
};

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

// Sized so the whole project reads in one view rather than a scroll hunt.
const mediaStyle = {
  width: '100%',
  maxHeight: '30vh',
  objectFit: 'contain',
  display: 'block',
  margin: '0 auto',
  borderRadius: '8px',
};

const Slide = ({ item, title, idx }) =>
  item.type === 'video' ? (
    <video
      src={item.src}
      poster={item.poster}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      aria-label={`${title} clip ${idx + 1}`}
      style={mediaStyle}
    />
  ) : (
    <img src={item.src} alt={`${title} screenshot ${idx + 1}`} loading="lazy" style={mediaStyle} />
  );

export const ProjectPopUp = ({ proj, openDialog, setOpenDialog }) => {
  const handleClose = () => setOpenDialog(false);

  return (
    <Dialog
      onClose={handleClose}
      open={openDialog}
      fullWidth
      maxWidth="md"
      PaperProps={{ sx: { borderRadius: '20px' } }}
    >
      <IconButton
        onClick={handleClose}
        aria-label="Close"
        sx={{ position: 'absolute', top: 8, right: 8, zIndex: 2, backgroundColor: 'rgba(255,255,255,0.85)' }}
      >
        <CloseIcon />
      </IconButton>

      <Box sx={{ bgcolor: 'white', px: { xs: '20px', md: '36px' }, py: '28px', textAlign: 'left' }}>
        {/* pr clears the absolutely positioned close button */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '16px',
            flexWrap: { xs: 'wrap', sm: 'nowrap' },
            pr: { xs: '40px', sm: '48px' },
          }}
        >
          <Box sx={{ minWidth: 0 }}>
            <Typography variant="title1" component="h2" sx={{ display: 'block' }}>
              {proj.title}
            </Typography>
            <Typography variant="title2" component="p" sx={{ display: 'block', mt: '2px' }}>
              {proj.role}
            </Typography>
            <Typography variant="meta" component="p">
              {proj.org} · {proj.year}
            </Typography>
          </Box>

          {proj.links?.length > 0 && (
            <Box sx={{ display: 'flex', gap: '4px', flexShrink: 0, mt: { xs: '4px', sm: '2px' } }}>
              {proj.links.map((link) => (
                <Button
                  key={`${proj.title}::${link.type}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link.url}
                  sx={{ minWidth: 'auto', p: '6px' }}
                >
                  <img src={LINK_IMG[link.type] || steamLogo} alt={link.type} height="34" />
                </Button>
              ))}
            </Box>
          )}
        </Box>

        <Box sx={{ display: 'flex', gap: '6px', flexWrap: 'wrap', mt: '12px' }}>
          <Chip label={proj.status} size="small" sx={pill} />
          {proj.platforms?.map((p) => (
            <Chip key={p} label={p} size="small" sx={pill} />
          ))}
        </Box>

        {/* paddingBottom reserves the space the dot list is absolutely positioned into */}
        <Box sx={{ position: 'relative', pb: '40px', mt: '16px' }}>
          <Carousel
            responsive={responsive}
            showDots
            infinite
            customTransition="transform 250ms ease-in-out"
            removeArrowOnDeviceType={['tablet', 'mobile']}
            renderDotsOutside
          >
            {proj.media?.map((item, idx) => (
              <Slide item={item} title={proj.title} idx={idx} key={`${proj.title}::media::${idx}`} />
            ))}
          </Carousel>
        </Box>

        {proj.contribution?.length > 0 && (
          <Box sx={{ mb: '16px' }}>
            <Typography variant="title3" component="h3" sx={{ display: 'block', mb: '8px' }}>
              What I owned
            </Typography>
            <Box component="ul" sx={{ pl: '20px', m: 0 }}>
              {proj.contribution.map((b) => (
                <Typography variant="body3" component="li" key={b} sx={{ mb: '6px', lineHeight: 1.45 }}>
                  {b}
                </Typography>
              ))}
            </Box>
          </Box>
        )}

        <Typography variant="body3" component="p" sx={{ color: '#3d3f47', lineHeight: 1.5 }}>
          {proj.pitch}
        </Typography>

        {proj.caveat && (
          <Typography variant="meta" component="p" sx={{ fontStyle: 'italic', mt: '10px' }}>
            {proj.caveat}
          </Typography>
        )}
      </Box>
    </Dialog>
  );
};
