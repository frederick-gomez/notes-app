import React from 'react';
import { logout, auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

//Material UI
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const UserModal = ({ anchorEl, closeModal }) => {
	const [user] = useAuthState(auth);

	const modalStyle = {
		minWidth: 300,
		maxWidth: 500,
		padding: 2,
	};

	const isOpen = Boolean(anchorEl);

	return (
		<Popover
			id='user-account'
			open={isOpen}
			anchorEl={anchorEl}
			onClose={closeModal}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'left',
			}}
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
		>
			<Card sx={modalStyle}>
				<CardContent>
					<Stack spacing={1} alignItems='center'>
						<Avatar
							sx={{ width: 56, height: 56 }}
							alt={user?.displayName}
							src={user?.photoURL}
						/>
						<Stack>
							<Typography
								align='center'
								variant='h6'
								sx={{ fontFamily: 'Open Sans' }}
							>
								{user?.displayName}
							</Typography>
							<Typography align='center' variant='body2'>
								{user?.email}
							</Typography>
						</Stack>
					</Stack>
				</CardContent>

				<CardActions>
					<Button
						onClick={() => {
							logout();
							closeModal();
						}}
					>
						Sign out
					</Button>
				</CardActions>
			</Card>
		</Popover>
	);
};

export default UserModal;
