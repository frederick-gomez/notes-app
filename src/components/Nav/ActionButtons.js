import React, { useState } from 'react';
import SearchBar from './SearchBar';
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

const ActionButtons = ({
	darkModeHandler,
	isDarkMode,
	listViewHandler,
	isListView,
}) => {
	const tabletSize = useMediaQuery('(max-width:599px)');
	const [hasUser, setHasUser] = useState(false);

	const [user] = useAuthState(auth);

	const openUserModal = () => setHasUser(true);
	const closeUserModal = () => setHasUser(false);

	return (
		<>
			<Stack direction='row'>
				<SearchBar />
				{!tabletSize && (
					<Tooltip title={isListView ? 'Grid view' : 'List view'}>
						<IconButton onClick={listViewHandler}>
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
						<IconButton onClick={openUserModal}>
							<AccountCircleIcon fontSize='large' />
						</IconButton>
					</Tooltip>
				)}
			</Stack>
			<UserModal isOpen={hasUser} closeModal={closeUserModal} />
		</>
	);
};

export default ActionButtons;
