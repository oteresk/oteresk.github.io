import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { PROJECTS, STUDENT_PROJECTS } from '../assets/projects';
import { ProjectCard } from '../components/ProjectCard';
import { SectionTitle } from '../components/SectionTitle';

const grid = (min) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fill, minmax(${min}, 1fr))`,
  gap: '16px',
  alignItems: 'stretch',
});

export const Projects = () => {
  const [showStudent, setShowStudent] = useState(false);

  return (
    <Box component="section" id="projects" sx={{ scrollMarginTop: '110px' }}>
      <SectionTitle title="Projects" />
      <Box sx={grid('300px')}>
        {PROJECTS.map((proj) => (
          <ProjectCard proj={proj} key={proj.title} />
        ))}
      </Box>

      <Box sx={{ mt: '48px', textAlign: 'left' }}>
        <Button
          onClick={() => setShowStudent((v) => !v)}
          sx={{ textTransform: 'none', px: 0 }}
        >
          {showStudent ? '−' : '+'} Student &amp; early work ({STUDENT_PROJECTS.length})
        </Button>
        <Typography variant="meta" component="p" sx={{ mb: '16px' }}>
          Coursework from San José State University, 2022–2023.
        </Typography>
        {showStudent && (
          <Box sx={grid('240px')}>
            {STUDENT_PROJECTS.map((proj) => (
              <ProjectCard proj={proj} compact key={proj.title} />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};
