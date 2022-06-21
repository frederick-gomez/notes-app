import React from 'react';
import Logo from '../../assets/notes-logo.png';
import { Link } from 'react-router-dom';

//Material UI
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

const NavMenu = ({ toggleDrawer, user }) => {
	const mobileSize = useMediaQuery('(max-width:400px)');
	const smallMobileSize = useMediaQuery('(max-width:320px)');
	const logoSize = mobileSize ? '36px' : '48px';
	const titleSize = mobileSize ? 'body1' : 'h6';
	const iconSize = smallMobileSize ? 'medium' : 'large';

	return (
		<Stack direction='row' spacing={1} alignItems='center'>
			{user && (
				<IconButton aria-label='menu' onClick={toggleDrawer}>
					<MenuIcon fontSize={iconSize} />
				</IconButton>
			)}
			<Link to='/'>
				<Box
					component='img'
					src={Logo}
					alt='Logo'
					sx={{
						width: logoSize,
						height: logoSize,
					}}
				/>
			</Link>

			<Box>
				<Typography
					variant={titleSize}
					component='h1'
					sx={{ fontFamily: 'Merienda, cursive' }}
					noWrap
				>
					Fantastic Pegasus
				</Typography>
			</Box>
		</Stack>
	);
};

export default NavMenu;
