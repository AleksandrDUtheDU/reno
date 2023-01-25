import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { navigation } from '../dataBase/dataBase';
import { HeaderMenuCustomLink, SideMenuCustomLink } from '../app/theme/NavItem';
import { ReactComponent as Logo } from '../resources/logo/renault-logo1.svg';
import { SvgIcon } from '@mui/material';

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const headerMenu = navigation.map(item => {
        const { id, name, link } = item;
        return (
            <HeaderMenuCustomLink key={id} to={`${link}`}> {name} </HeaderMenuCustomLink>
        )
    })

    const sideMenu = navigation.map(item => {
        const { id, name, link } = item;
        return (
            <SideMenuCustomLink key={id} to={`${link}`}> {name} </SideMenuCustomLink>
        )
    });


    return (
        <AppBar position="fixed">
            <Container maxWidth="xl" sx={{ height: 60, display: 'flex' }}>
                {/* <Toolbar sx={{ padding: 0 }} > */}
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <SvgIcon sx={{ mr: 1, fontSize: 60 }}>
                        <Logo />
                    </SvgIcon>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            lineHeight: '60px'
                        }}
                    >
                        RENO-GO
                    </Typography>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <SvgIcon sx={{ mr: 1, fontSize: 60 }}>
                        <Logo />
                    </SvgIcon>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            lineHeight: '60px'
                        }}
                    >
                        RENO-GO
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between' }}>

                    {headerMenu}
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'end' }}>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {sideMenu}
                    </Menu>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon
                            sx={{ fontSize: 60 }}
                        />
                    </IconButton>
                </Box>
                {/* </Toolbar> */}
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;