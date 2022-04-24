import React, { useState } from 'react';
import SearchBar from './SearchBar';

//Material UI
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';

const ActionButtons = ({
	darkModeHandler,
	isDarkMode,
	listViewHandler,
	isListView,
}) => {
	return (
		<Stack direction='row'>
			<SearchBar />
			<Tooltip title={isListView ? 'Grid view' : 'List view'}>
				<IconButton onClick={listViewHandler}>
					{isListView ? (
						<GridViewRoundedIcon fontSize='large' />
					) : (
						<ViewListRoundedIcon fontSize='large' />
					)}
				</IconButton>
			</Tooltip>
			<Tooltip title={isDarkMode ? 'Enable light mode' : 'Enable dark mode'}>
				<IconButton onClick={darkModeHandler}>
					{isDarkMode ? (
						<Brightness7Icon fontSize='large' />
					) : (
						<Brightness4Icon fontSize='large' />
					)}
				</IconButton>
			</Tooltip>
			<IconButton>
				<AccountCircleIcon fontSize='large' />
			</IconButton>
		</Stack>
	);
};

export default ActionButtons;
