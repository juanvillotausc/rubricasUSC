import { Box, Menu, MenuItem, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ButtonStyled } from './Navbar.style';

const MenuDesign = () => {
    const location = useLocation();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <ButtonStyled
                style={{ border: "none !important" }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Design
            </ButtonStyled>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <Link style={{ textDecoration: 'none' }} to="/rubric/generate">
                    <MenuItem >Generate Rubric</MenuItem>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="create/asdasda" state={{ background: location }}>
                    <MenuItem >Create Rubric</MenuItem>
                </Link>
            </Menu>
            <Outlet />
        </div>
    )
}

export default MenuDesign;