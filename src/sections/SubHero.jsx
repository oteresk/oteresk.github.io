import { Box, List, ListItem, Typography } from '@mui/material';
import { PROJ_MAN, SOFTWARE } from '../assets/constants';
import { StyledBox } from '../components/StyledBox';
import LogoGif from '../assets/images/logo.webp';

const SkillList = ({ title, items }) => (
  <StyledBox width="100%" sx={{ textAlign: 'left' }}>
    <Typography variant="h1" component="h2" sx={{ fontSize: '2rem' }}>
      {title}
    </Typography>
    <List sx={{ listStyleType: 'disc', ml: '20px', mt: '10px' }}>
      {items.map((bullet) => (
        <ListItem sx={{ display: 'list-item', pt: 0, pb: '4px', px: 0 }} key={bullet}>
          <Typography variant="body3" component="span">{bullet}</Typography>
        </ListItem>
      ))}
    </List>
  </StyledBox>
);

export const SubHero = () => (
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
      gap: '24px',
      alignItems: 'start',
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src={LogoGif} alt="" loading="lazy" style={{ width: '100%', maxWidth: '340px', borderRadius: '10px' }} />
    </Box>
    <SkillList title="Production" items={PROJ_MAN} />
    <SkillList title="Software" items={SOFTWARE} />
  </Box>
);
