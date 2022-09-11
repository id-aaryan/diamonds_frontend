import * as React from 'react';
import { styled } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

function MenuOpenClose() {
    return (
        <DrawerHeader>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                    marginRight: 0.5,
                    ...(props.open && { display: 'none' }),
                }}
                >
                <MenuIcon />
            </IconButton>
            <IconButton 
                onClick={handleDrawerClose}
                sx={{
                    marginRight: 0.5,
                    ...(!props.open && { display: 'none' }),
                }}
            >
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
        </DrawerHeader>
    );
}

export default MenuOpenClose;