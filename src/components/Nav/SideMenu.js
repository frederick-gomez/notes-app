import React from 'react';

//Material UI
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LabelIcon from '@mui/icons-material/Label';
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
			}}>
			<IconButton onClick={toggleDrawer}>
				<ChevronLeftIcon fontSize='large' />
			</IconButton>
			<Divider />
			<List>
				<ListItem>
					<ListItemButton>
						<ListItemIcon>
							<TextSnippetIcon />
						</ListItemIcon>
						<ListItemText primary='Notes' />
					</ListItemButton>
				</ListItem>

				<ListItem>
					<ListItemButton>
						<ListItemIcon>
							<LabelIcon />
						</ListItemIcon>
						<ListItemText primary='Labels' />
					</ListItemButton>
				</ListItem>

				<ListItem>
					<ListItemButton>
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
