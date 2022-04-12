import React from 'react';
import SearchBar from './SearchBar';

//Material UI
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ActionButtons = ({ darkModeHandler, isDarkMode }) => {
	return (
		<Stack direction='row'>
			<SearchBar />
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
