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

            <Outlet />
        </div>
    )
}

export default MenuDesign;