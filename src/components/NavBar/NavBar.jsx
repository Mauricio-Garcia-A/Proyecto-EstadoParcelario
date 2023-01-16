import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { NavLink } from 'react-router-dom';

const pages = [{
  title: 'HOME',
  path: '/'
},
{
  title: 'Listado de Terrenos',
  path: '/lista-parcelas'
},
{
  title: 'Descipcion de los Terrenos',
  path: '/descripcion-parcelas'
}
];
//const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];



function NavBar() {
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
          <Container sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, width: "80px" }} >
            <img src='/logo.png' style={{ width: '40px', paddingRight: '10px' }} />
          </Container>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TERRENOS
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
              {pages.map((page, i) => (
                <MenuItem key={i} onClick={handleCloseNavMenu}>

                  <NavLink to={page.path} style={{ textDecoration: 'none' }}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </NavLink>


                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Container sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, width: "80px" }} maxWidth="sm">
            <img src='/logo.png' style={{ width: '40px', paddingRight: '10px' }} />
          </Container>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TERRENOS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, i) => (
              <NavLink to={page.path} style={{ textDecoration: 'none' }}>
                <Button
                  key={i}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >

                  {page.title}


                </Button>
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Mauro Ariel Mattioli">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/fotoPerfil.png" />
              </IconButton>
            </Tooltip>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;



/*
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav>
            <NavLink to="/" >HOME</NavLink>
            <NavLink to="/lista-parcelas" >Listado de Terrenos</NavLink>
            <NavLink to="/descripcion-parcelas" >Descripcion</NavLink>
  
        </nav>
    )
}
*/