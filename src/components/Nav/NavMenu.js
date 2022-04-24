import React from 'react';
import Logo from '../../assets/notes-logo.png';

//Material UI
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';

const NavMenu = ({ toggleDrawer }) => {
	return (
		<>
			<Stack direction='row' spacing={1} alignItems='center'>
				<IconButton aria-label='menu' onClick={toggleDrawer}>
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
		</>
	);
};

export default NavMenu;
