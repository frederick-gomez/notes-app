import React from 'react';
import { logout } from '../../firebase';

//Material UI
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const UserModal = ({ isOpen, closeModal }) => {
	const modalStyle = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		minWidth: 300,
		maxWidth: 500,
		padding: 2,
	};

	return (
		<Modal open={isOpen} onClose={closeModal}>
			<Card sx={modalStyle}>
				<CardHeader
					title='Manage your account'
					titleTypographyProps={{
						component: 'h1',
						variant: 'h5',
						fontFamily: 'Open Sans',
					}}
					sx={{ paddingBottom: 0 }}
					action={
						<IconButton type='button' onClick={closeModal}>
							<CloseIcon />
						</IconButton>
					}
				/>

				<CardContent></CardContent>

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
		</Modal>
	);
};

export default UserModal;
