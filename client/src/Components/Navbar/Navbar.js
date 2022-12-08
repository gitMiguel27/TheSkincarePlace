import React from "react";
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Container, Avatar, Tooltip, Icon, ListItem, ListItemIcon } from '@mui/material';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const pages = ['Recommended', 'About'];
const settings = ['Login'];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 1,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Roboto',
                fontWeight: 500,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
            <Link style={{ textDecoration: 'none', color: 'white' }} to={'/'}>The Skincare Place</Link>
            </Typography>
  
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
              <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
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
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center"
                      sx={{
                        mr: 1,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'Roboto',
                        fontWeight: 500,
                        letterSpacing: '.1rem',
                        color: 'inherit',
                        textDecoration: 'none',
                      }}
                    >
                      <Link style={{ textDecoration: 'none', color: 'white' }} to={`/${page.toLowerCase()}`}>
                      {page}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 1,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <Link style={{ textDecoration: 'none', color: 'white' }} to={'/'}>The Skincare Place</Link>
            </Typography>
            {
            //TODO Figure out Skin Type page tabs and add to switch case
            }
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white' }}
                  startIcon={ { 
                    'Recommended' : <CleanHandsIcon/>,
                    'About' : <LightbulbIcon/> ,
                 }[page] }
                >
                  <Link style={{ textDecoration: 'none', color: 'white' }} to={`/${page.toLowerCase()}`}>
                    {page}
                  </Link>
                </Button>
              ))}
            </Box>
  
            {//TODO Figure out User stuff with MUI Avatar
            }
            {/* <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Profile Name" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
                </Box> */}
          </Toolbar>
        </Container>
      </AppBar>
    )
};

export default Navbar;