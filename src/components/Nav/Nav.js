import React from 'react';
import NavMenu from './NavMenu';
//Material UI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchBar from './SearchBar';

const Nav = () => {
	return (
		<nav>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='static' color='inherit'>
					<Toolbar
						sx={{
							justifyContent: 'space-between',
						}}>
						<NavMenu />
						<SearchBar />
						<Box>
							<IconButton>
								<AccountCircleIcon fontSize='large' />
							</IconButton>
						</Box>
					</Toolbar>
				</AppBar>
			</Box>
		</nav>
	);
};

export default Nav;
