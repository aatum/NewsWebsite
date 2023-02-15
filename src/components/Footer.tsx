import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import NewspaperIcon from '@mui/icons-material/Newspaper';

//defining how the footer is gonna be inside the const
const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        backgroundColor: 'black',
        paddingTop: '1rem',
        paddingBottom: '1rem',
      }}
    >
      <Container maxWidth='lg'>
        <Grid container direction='column' alignItems='center'>
          <Grid item xs={12}>
            <Typography color='white' variant='h5'>
              <NewspaperIcon/> React News App 
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color='white' variant='subtitle1'>
              {`${new Date().getFullYear()} | Aatu Marttila | React | Material UI | React Router`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
