import { Box, Button, Grid2, Typography } from "@mui/material";
import { INTRO_BLURB, LINKS } from "../assets/constants";
import { StyledBox } from "../components/StyledBox";
import DavidImg from '../assets/images/davidheadshot.png'
import { roundWhiteButton } from "../assets/styles";

export const Hero = (() => {

  return (
    <section id='about'>
      <StyledBox
        sx={{
          // backgroundColor: 'primary.bg',
          maxWidth: '100%',
          // height: props.height || '350px',
          // ...gradientBorder
          display: 'flex',
        }}>
        <Grid2 container spacing='10px'>
          <Grid2 item size={{ xs: 12, md: 7, lg: 8 }} >
            <Box>
              <Typography align='left' variant="h1">David Koster</Typography>
              <Box sx={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* mobile view */}
                <Box
                  component="img"
                  src={DavidImg}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                    mb: '20px',
                    width: '50%',
                    maxWidth: '320px',
                    borderRadius: '10px'
                  }}
                />
                <Typography variant='body1' align='left'>{INTRO_BLURB}</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 2, marginTop: '20px' }}>
                  {
                    LINKS.map(link => {
                      return <Button
                        key={`button::${link.name}`}
                        variant='outlined'
                        size='small'
                        href={link.url}
                        sx={{
                          color: 'black',
                          fontSize: '16px',
                          ...roundWhiteButton,
                          '&:hover': {
                            backgroundColor: 'white'
                          }
                        }}
                      >
                        {link.name}
                      </Button>
                    })
                  }
                </Box>
              </Box>
            </Box>
          </Grid2>

          <Grid2 item size={{ xs: 12, md: 5, lg: 4 }}>
            {/* tablet and desktop image */}
          <Box
                  component="img"
                  src={DavidImg}
                  sx={{
                    display: { xs: 'none', md: 'block' },
                    mb: '20px',
                    width: '50%',
                    maxWidth: '320px',
                    borderRadius: '10px'
                  }}
                />
          </Grid2>
        </Grid2>
      </StyledBox>
    </section>
  );
});