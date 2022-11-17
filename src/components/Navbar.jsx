import { AppBar, Button, Toolbar } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import { Logo, ToolbarContainer, Typography } from './Navbar.style';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from 'styled-components'
import MenuDesign from './MenuDesign';
import { DataContext } from '../context/DataContext';
import { useContext } from 'react';

const Navbar = () => {
    const theme = useTheme();
    const { setTheme } = useContext(DataContext);

    const toggleTheme = () => {
        setTheme((currentMode) => currentMode === 'dark' ? 'light' : 'dark');
    }

    return (
        <AppBar style={{ boxShadow: "none" }} position="relative">
            <ToolbarContainer>
                <Toolbar style={{ alignItems: 'left', minHeight: 90 }}>
                    <Link style={{ textDecoration: 'none', flexGrow: 1 }} to="/">
                        <Logo>Rubrics <br /> USC</Logo>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/">
                        <Button>
                            <Typography>
                                Home
                            </Typography>
                        </Button>
                    </Link>
                    <MenuDesign />
                    <Button onClick={toggleTheme} style={{ boxShadow: "none" }}>
                        {theme.text === '#ffffffd4' ? <LightModeIcon style={{ color: theme.text }} /> : <DarkModeIcon style={{ color: theme.text }} />}
                    </Button>
                </Toolbar>
            </ToolbarContainer>
            <Outlet />
        </AppBar >
    )
}

export default Navbar;