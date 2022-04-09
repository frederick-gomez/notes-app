import React, { useState } from 'react';
//Material UI
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import List from '@mui/material/List';

const SideMenu = () => {
	const [isDrawerOpen, setisDrawerOpen] = useState(true);

	const toggleDrawer = () => {
		if (isDrawerOpen) {
			setisDrawerOpen(false);
		} else {
			setisDrawerOpen(true);
		}
	};

	return (
		<Drawer
			sx={{
				width: 340,
			}}
			open={isDrawerOpen}
			variant='permanent'
			anchor='left'
			hideBackdrop>
			<IconButton onClick={toggleDrawer}>
				<ChevronLeftIcon />
			</IconButton>
			<IconButton>
				<TextSnippetIcon />
			</IconButton>
		</Drawer>
	);
};

export default SideMenu;
