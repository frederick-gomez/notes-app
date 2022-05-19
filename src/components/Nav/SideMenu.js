import React from 'react';
import { NavLink } from 'react-router-dom';

//Material UI
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ArchiveIcon from '@mui/icons-material/Archive';
import Divider from '@mui/material/Divider';

const SideMenu = ({ isOpen, toggleDrawer }) => {
	return (
		<Drawer
			open={isOpen}
			variant='temporary'
			anchor='left'
			onClose={toggleDrawer}
			PaperProps={{ sx: { minWidth: '250px' } }}
		>
			<List disablePadding>
				<ListItem
					disableGutters
					sx={{
						justifyContent: 'flex-end',
						paddingRight: '1rem',
					}}
				>
					<ListItemButton
						onClick={toggleDrawer}
						sx={{
							maxWidth: '33%',
							justifyContent: 'center',
						}}
					>
						<ChevronLeftIcon fontSize='large' />
					</ListItemButton>
				</ListItem>
				<Divider component='li' />
				<ListItem>
					<ListItemButton component={NavLink} to='/notes' onClick={toggleDrawer}>
						<ListItemIcon>
							<TextSnippetIcon />
						</ListItemIcon>
						<ListItemText primary='Notes' />
					</ListItemButton>
				</ListItem>

				<ListItem>
					<ListItemButton component={NavLink} to='/archive' onClick={toggleDrawer}>
						<ListItemIcon>
							<ArchiveIcon />
						</ListItemIcon>
						<ListItemText primary='Archive' />
					</ListItemButton>
				</ListItem>
			</List>
		</Drawer>
	);
};

export default SideMenu;
