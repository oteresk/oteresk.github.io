export const onHoverShadow = {
  transition: '0.5s ease',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.5)',
    boxShadow: '0 20px 30px -10px rgba(0, 0, 0, 0.2)'
  }
};

export const onHoverEnlarge = {
  transition: '0.5s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    backgroundColor: 'rgba(243, 243, 243, 1)'
  }
};

export const roundWhiteButton = {
  background: 'hsla(0, 0%, 100%, 0.25)',
  boxShadow: '0 5px 10px rgba(0, 0, 0, 0.05)',
  borderRadius: '30px',
  width: '125px'
};

// Same vocabulary as roundWhiteButton, sized down for a label rather than a control.
export const pill = {
  background: 'hsla(0, 0%, 100%, 0.45)',
  border: '1px solid rgba(255, 255, 255, 0.6)',
  boxShadow: '0 5px 10px rgba(0, 0, 0, 0.05)',
  borderRadius: '30px',
  height: '26px',
  '& .MuiChip-label': { px: '12px' },
};

export const availabilityPill = {
  ...pill,
  background: '#e8f5e9',
  border: '1px solid #a5d6a7',
  '& .MuiChip-label': { px: '14px', color: '#1b5e20' },
};

export const cardBox = {
  borderRadius: '10px',
  backgroundColor: 'rgba(225, 225, 225, 0.1)',
  boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.2)',
  border: '1px solid rgba(255, 255, 255, 0.25)',
};
