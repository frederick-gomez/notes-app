import React from 'react';
import NavMenu from './NavMenu';
import ActionButtons from './ActionButtons';
//Material UI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
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
						<ActionButtons />
					</Toolbar>
				</AppBar>
			</Box>
		</nav>
	);
};

export default Nav;
