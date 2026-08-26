import { Box } from '@mui/material';

export const StyledBox = ({ children, padding, width, component, sx }) => (
  <Box
    component={component || 'div'}
    sx={{
      borderRadius: '1rem',
      backgroundColor: '#ffffff66',
      boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.05)',
      padding: padding || '20px',
      width: width || 'auto',
      ...sx,
    }}
  >
    {children}
  </Box>
);
