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
import MenuItem from '@mui/material/MenuItem';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import { navigation } from '../dataBase/dataBase';
import { HeaderMenuCustomLink, SideMenuCustomLink } from '../app/theme/NavItem';



function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // const headerNav = navigation.map((nav) => {
    //     const { id, name, link } = nav;
    //     return (
    //         <StyledLink
    //             // component="a"
    //             key={id}
    //             onClick={handleCloseNavMenu}
    //             sx={{ my: 2, color: 'white', display: 'block' }}
    //         >
    //             {name}
    //         </StyledLink>)
    // })

    const headerMenu = navigation.map(item => {
        const { id, name, link } = item;
        return (
            <HeaderMenuCustomLink color='red' key={id} to={`${link}`}> {name} </HeaderMenuCustomLink>
        )
    })

    const sideMenu = navigation.map(item => {
        const { id, name, link } = item;
        return (
            <SideMenuCustomLink key={id} to={`${link}`}> {name} </SideMenuCustomLink>
        )
    });


    return (
        <AppBar position="static">
            <Container maxWidth="xl" sx={{ height: 70 }}>
                <Toolbar >
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <CarRepairIcon
                            sx={{ mr: 1, fontSize: 60 }}
                        />
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
                            }}
                        >
                            RENO-GO
                        </Typography>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <CarRepairIcon
                            sx={{ mr: 1, fontSize: 60 }}
                        />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            RENO-GO
                        </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between' }}>

                        {headerMenu}
                        {/* {pages.map((page) => (
                            <Button
                                component="a"

                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))} */}
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
                            {/* {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))} */}
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
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;