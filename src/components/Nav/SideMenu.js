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

const SideMenu = ({ isOpen, toggleDrawer }) => {
	return (
		<Drawer
			open={isOpen}
			variant='temporary'
			anchor='left'
			onClose={toggleDrawer}
			sx={{
				alignContent: 'flex-end',
			}}
		>
			<List disablePadding>
				<ListItem disableGutters>
					<ListItemButton divider onClick={toggleDrawer}>
						<ChevronLeftIcon fontSize='large' />
					</ListItemButton>
				</ListItem>

				<ListItem>
					<ListItemButton
						component={NavLink}
						to='/notes'
						onClick={toggleDrawer}
					>
						<ListItemIcon>
							<TextSnippetIcon />
						</ListItemIcon>
						<ListItemText primary='Notes' />
					</ListItemButton>
				</ListItem>

				<ListItem>
					<ListItemButton
						component={NavLink}
						to='/filednotes'
						onClick={toggleDrawer}
					>
						<ListItemIcon>
							<ArchiveIcon />
						</ListItemIcon>
						<ListItemText primary='Filed Notes' />
					</ListItemButton>
				</ListItem>
			</List>
		</Drawer>
	);
};

export default SideMenu;
