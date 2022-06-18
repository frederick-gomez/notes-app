import React, { useState, useContext } from 'react';
import NoteViewContext from '../Context/NoteViewContext';
import UserModal from '../Auth/UserModal';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

//Material UI
import useMediaQuery from '@mui/material/useMediaQuery';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';

const ActionButtons = ({ darkModeHandler, isDarkMode }) => {
	const tabletSize = useMediaQuery('(max-width:599px)');
	const [anchorEl, setAnchorEl] = useState(null);
	const [user] = useAuthState(auth);

	const { isListView, toggleView } = useContext(NoteViewContext);

	//Manage open/close modal
	const selectAnchorEl = (event) => setAnchorEl(event.currentTarget);
	const closeModal = () => setAnchorEl(null);

	return (
		<>
			<Stack direction='row'>
				{!tabletSize && user && (
					<Tooltip title={isListView ? 'Grid view' : 'List view'}>
						<IconButton onClick={toggleView}>
							{isListView ? (
								<GridViewRoundedIcon fontSize='large' />
							) : (
								<ViewListRoundedIcon fontSize='large' />
							)}
						</IconButton>
					</Tooltip>
				)}
				<Tooltip title={isDarkMode ? 'Enable light mode' : 'Enable dark mode'}>
					<IconButton onClick={darkModeHandler}>
						{isDarkMode ? (
							<Brightness7Icon fontSize='large' />
						) : (
							<Brightness4Icon fontSize='large' />
						)}
					</IconButton>
				</Tooltip>
				{user && (
					<Tooltip title='View account'>
						<IconButton onClick={selectAnchorEl}>
							<AccountCircleIcon fontSize='large' />
						</IconButton>
					</Tooltip>
				)}
			</Stack>
			<UserModal closeModal={closeModal} anchorEl={anchorEl} />
		</>
	);
};

export default ActionButtons;
