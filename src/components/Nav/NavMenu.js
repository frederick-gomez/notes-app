import React from 'react';
import Logo from '../../assets/notes-logo.png';
import { Link } from 'react-router-dom';

//Material UI
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';

const NavMenu = ({ toggleDrawer, user }) => {
	return (
		<>
			<Stack direction='row' spacing={1} alignItems='center'>
				{user && (
					<IconButton aria-label='menu' onClick={toggleDrawer}>
						<MenuIcon />
					</IconButton>
				)}
				<Link to='/'>
					<Box
						component='img'
						src={Logo}
						alt='Logo'
						sx={{
							width: '50px',
						}}
					/>
				</Link>

				<Typography variant='h6' component='h1' noWrap>
					Notes
				</Typography>
			</Stack>
		</>
	);
};

export default NavMenu;
