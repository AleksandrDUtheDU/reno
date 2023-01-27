import { useState } from 'react';
import { AppBar, Box, IconButton, Typography, Menu, Container, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { navigation } from '../dataBase/dataBase';
import { HeaderMenuCustomLink, SideMenuCustomLink, ButtonLink } from '../shared/ui/CustomLinks';
import Logo from '../shared/ui/Logo';

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
            <MenuItem sx={{ fontSize: '14px' }} key={id}>
                <HeaderMenuCustomLink to={`${link}`}> {name} </HeaderMenuCustomLink>
            </MenuItem>
        )
    })

    const sideMenu = navigation.map(item => {
        const { id, name, link } = item;
        return (
            <MenuItem sx={{ fontSize: '14px', borderBottom: 'solid #00000026' }} key={id}>
                <SideMenuCustomLink to={`${link}`}> {name} </SideMenuCustomLink>
            </MenuItem>
        )
    });

    return (
        <AppBar position="fixed">
            <Container maxWidth="xl" sx={{ height: 60, display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Logo />
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
                    <Logo />
                    <Typography
                        variant="h5"
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
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between' }}>

                    {headerMenu}
                </Box>
                <Box>
                    <MenuItem>
                        <ButtonLink
                            color={'secondary'}
                            variant="contained"
                            sx={{ height: 40, fontSize: 16, marginTop: '4px' }}
                            to="calc_services"
                        >
                            Рассчет
                        </ButtonLink>
                    </MenuItem>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'end' }}>
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
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;