import React, { FC, ReactElement } from "react";
import {
  Box,
  Link,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  AppBar
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { routes } from "./Routes";
import { NavLink} from "react-router-dom";

//creating navbar const variable
const Navbar: FC = (): ReactElement => {

//using anchorEl to set the position of the navbar 
  const [anchorElNav, setAnchorElNav] = React.useState(null);

//handling close
  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

//handling open
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

// returning the navbar with styling, and using typography for the design. also mapping the routes
  return (
    <AppBar position='static' style={{backgroundColor: "black"}}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <NewspaperIcon/> React News App 
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {routes.map((route) => (
                <Link
                  key={route.key}
                  component={NavLink}
                  to={route.path}
                  color='black'
                  underline='none'
                  variant='button'
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign='center'>{route.title}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
           <NewspaperIcon/> React News App 
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginLeft: '1rem',
              }}
            > 
              {routes.map((page) => (
                <Link
                  key={page.key}
                  component={NavLink}
                  to={page.path}
                  color='white' 
                  underline='none'
                  variant='button'
                  sx={{ fontSize: 'large', marginLeft: '2rem' }}
                >
                  {page.title}
                </Link>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </Container>
      </AppBar>
  );
};

export default Navbar;
