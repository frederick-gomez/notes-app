import React from 'react';
import NavMenu from './NavMenu';
import ActionButtons from './ActionButtons';
// import SideMenu from './SideMenu';
//Material UI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchBar from './SearchBar';

const Nav = ({ darkModeHandler, isDarkMode }) => {
	return (
		<nav>
			<Box mb={4} sx={{ flexGrow: 1 }}>
				<AppBar position='static' color='inherit'>
					<Toolbar
						sx={{
							justifyContent: 'space-between',
						}}>
						<NavMenu />

						{/* <SideMenu /> */}
						<SearchBar />
						<ActionButtons
							darkModeHandler={darkModeHandler}
							isDarkMode={isDarkMode}
						/>
					</Toolbar>
				</AppBar>
			</Box>
		</nav>
	);
};

export default Nav;
