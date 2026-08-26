import { useState } from 'react';
import { Box, Button, Chip, Typography } from '@mui/material';
import { ProjectPopUp } from './ProjectPopUp';
import { cardBox, onHoverEnlarge, pill } from '../assets/styles';

export const ProjectCard = ({ proj, compact = false }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const cover = proj.media?.[0];
  const coverSrc = cover?.type === 'video' ? cover.poster : cover?.src;

  return (
    <Box
      sx={{
        ...cardBox,
        padding: { xs: '10px', lg: '14px' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'left',
        width: '100%',
        ...onHoverEnlarge,
      }}
    >
      <Box>
        <Box onClick={() => setOpenDialog(true)} sx={{ '&:hover': { cursor: 'pointer' } }}>
          <Box
            component="img"
            src={coverSrc}
            alt={`${proj.title} screenshot`}
            loading="lazy"
            sx={{
              height: compact ? '140px' : { xs: '170px', xxl: '200px' },
              width: '100%',
              borderRadius: '10px',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', gap: '6px', flexWrap: 'wrap', mt: '12px' }}>
          <Chip label={proj.status} size="small" sx={pill} />
          {proj.platforms?.map((p) => (
            <Chip key={p} label={p} size="small" sx={pill} />
          ))}
        </Box>

        <Typography variant="title2" component="h3" sx={{ display: 'block', mt: '10px' }}>
          {proj.title}
        </Typography>
        <Typography variant="statLabel" component="p">
          {proj.role}
        </Typography>
        <Typography variant="meta" component="p">
          {proj.org} · {proj.year}
        </Typography>
      </Box>

      <Box sx={{ mt: '14px' }}>
        <Button variant="contained" onClick={() => setOpenDialog(true)}>
          More Info
        </Button>
      </Box>

      <ProjectPopUp proj={proj} openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </Box>
  );
};
