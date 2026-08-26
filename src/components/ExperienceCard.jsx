import { Box, Typography } from '@mui/material';

/*
  One row of the credits timeline. Logo on a rail, company, roles, one summary
  line. Deliberately has no bullet list - see the note in experience.js.
*/
export const ExperienceCard = ({ exp, last = false }) => (
  <Box sx={{ display: 'flex', gap: { xs: '14px', sm: '20px' }, textAlign: 'left' }}>
    {/* rail: logo plus the connector down to the next entry */}
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
      <Box
        sx={{
          width: { xs: '48px', sm: '58px' },
          height: { xs: '48px', sm: '58px' },
          borderRadius: '50%',
          backgroundColor: exp.logoBgColor || '#000',
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        <img
          src={exp.logo}
          alt={`${exp.title} logo`}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </Box>
      {!last && <Box sx={{ width: '1px', flex: 1, mt: '10px', backgroundColor: 'rgba(0,0,0,0.14)' }} />}
    </Box>

    <Box sx={{ pb: last ? 0 : '30px', minWidth: 0 }}>
      <Typography variant="title2" component="h3" sx={{ display: 'block' }}>
        {exp.title}
        <Typography variant="meta" component="span" sx={{ ml: '8px' }}>
          {exp.employment}
        </Typography>
      </Typography>

      <Box sx={{ mt: '4px', display: 'flex', flexWrap: 'wrap', columnGap: '10px' }}>
        {exp.roles.map((role, i) => (
          <Typography variant="meta" component="span" key={role.role}>
            {i > 0 && <Box component="span" sx={{ mr: '10px', opacity: 0.45 }}>·</Box>}
            <Box component="span" sx={{ color: '#000', fontWeight: 500 }}>
              {role.role}
            </Box>
            , {role.date}
          </Typography>
        ))}
      </Box>

      <Typography variant="body3" component="p" sx={{ mt: '10px', lineHeight: 1.5 }}>
        {exp.summary}
      </Typography>
    </Box>
  </Box>
);
