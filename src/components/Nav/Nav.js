import React, { useState } from 'react';
import NavMenu from './NavMenu';
import ActionButtons from './ActionButtons';
import SideMenu from './SideMenu';

//Material UI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const Nav = ({ darkModeHandler, isDarkMode }) => {
	const [isDrawerOpen, setisDrawerOpen] = useState(false);
	const toggleDrawer = () => setisDrawerOpen(!isDrawerOpen);

	return (
		<Box component='nav' mb={11} sx={{ flexGrow: 1 }}>
			<AppBar position='fixed' color='inherit'>
				<Toolbar
					sx={{
						justifyContent: 'space-between',
					}}
				>
					<SideMenu isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />

					<NavMenu toggleDrawer={toggleDrawer} />

					<ActionButtons
						darkModeHandler={darkModeHandler}
						isDarkMode={isDarkMode}
					/>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Nav;
