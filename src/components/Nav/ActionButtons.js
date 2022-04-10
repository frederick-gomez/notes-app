import React from 'react';
//Material UI
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ActionButtons = ({ darkModeHandler, isDarkMode }) => {
	return (
		<Box>
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
		</Box>
	);
};

export default ActionButtons;
