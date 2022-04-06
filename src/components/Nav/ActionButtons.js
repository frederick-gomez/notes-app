import React from 'react';
//Material UI
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Brightness4Icon from '@mui/icons-material/Brightness4';

const ActionButtons = () => {
	return (
		<Box>
			<IconButton>
				<Brightness4Icon fontSize='large' />
			</IconButton>
			<IconButton>
				<AccountCircleIcon fontSize='large' />
			</IconButton>
		</Box>
	);
};

export default ActionButtons;
