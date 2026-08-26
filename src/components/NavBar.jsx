import { useState } from 'react';
import { Link } from 'react-scroll';
import { Box, Button, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { StyledBox } from './StyledBox';
import { NAV } from '../assets/constants';
import { roundWhiteButton } from '../assets/styles';

// One offset for every link - the sticky bar is a fixed height, so per-link
// tuning was only ever compensating for the ragged card layout.
const NAV_OFFSET = -110;

export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  return (
    <StyledBox
      component="nav"
      sx={{
        position: 'sticky',
        top: '10px',
        width: '92%',
        maxWidth: '1400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 20px',
        gap: 2,
        background: 'rgba(255, 255, 255, 0.5)',
        boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.05)',
        backdropFilter: 'blur(1rem)',
        border: '1px solid rgba(255, 255, 255, 0.25)',
        zIndex: 100,
      }}
    >
      <Link to="home" smooth duration={300} offset={NAV_OFFSET} style={{ cursor: 'pointer' }}>
        <Typography variant="h2" noWrap sx={{ color: 'inherit', textDecoration: 'none', fontSize: { xs: '1.3rem', md: '2rem' } }}>
          David Koster
        </Typography>
      </Link>

      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <IconButton size="large" aria-label="Open navigation menu" onClick={(e) => setAnchorElNav(e.currentTarget)} color="inherit">
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          open={Boolean(anchorElNav)}
          onClose={() => setAnchorElNav(null)}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          {NAV.map((page) => (
            <MenuItem key={page.name} onClick={() => setAnchorElNav(null)}>
              <Link to={page.link} smooth duration={500} offset={NAV_OFFSET} spy activeClass="active">
                {page.name}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '4px', flexWrap: 'nowrap' }}>
        {NAV.map((page) => (
          <Link key={`nav_link::${page.name}`} to={page.link} smooth duration={300} offset={NAV_OFFSET} spy activeClass="active">
            <Button
              variant="outlined"
              size="small"
              sx={{
                color: 'black',
                fontSize: '15px',
                whiteSpace: 'nowrap',
                px: '14px',
                borderRadius: '30px',
                '&:hover': { ...roundWhiteButton, width: 'auto', backgroundColor: 'white' },
              }}
            >
              {page.name}
            </Button>
          </Link>
        ))}
      </Box>
    </StyledBox>
  );
};
