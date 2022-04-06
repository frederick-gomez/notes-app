import React from 'react';
import Logo from '../../assets/notes-logo.png';
//MUI
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';

const NavMenu = () => {
	return (
		<Stack direction='row' spacing={1} alignItems='center'>
			<IconButton color='inherit' aria-label='menu'>
				<MenuIcon />
			</IconButton>
			<Box
				component='img'
				src={Logo}
				alt='Logo'
				sx={{
					width: '50px',
				}}
			/>
			<Typography variant='h5' component='h1'>
				Notes
			</Typography>
		</Stack>
	);
};

export default NavMenu;
