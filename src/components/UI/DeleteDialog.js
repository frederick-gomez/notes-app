import React, { useState } from 'react';
import Notification from './Notification';

//Material UI
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const DeleteDialog = ({ isOpen, handleClose, deleteNote }) => {
	const [isNotificationOpen, setIsNotificationOpen] = useState(false);

	const hideNotification = () => {
		setIsNotificationOpen(false);
	};
	const showNotification = () => {
		setIsNotificationOpen(true);
	};
	return (
		<>
			<Dialog
				open={isOpen}
				onClose={handleClose}
				PaperProps={{
					style: { padding: 8 },
				}}
			>
				<DialogTitle id='confirm-delete-dialog'>
					{'Are you sure you want to delete this note?'}
				</DialogTitle>
				<DialogContent>
					<DialogContentText>This action is permanent</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button
						variant='outlined'
						startIcon={<CloseIcon />}
						onClick={handleClose}
					>
						Cancel
					</Button>
					<Button
						endIcon={<DeleteForeverIcon />}
						variant='contained'
						color='error'
						onClick={() => {
							deleteNote();
							handleClose();
							showNotification();
						}}
						autoFocus
					>
						Delete
					</Button>
				</DialogActions>
			</Dialog>
			<Notification
				isOpen={isNotificationOpen}
				handleClose={hideNotification}
				alertType='success'
			>
				Note deleted
			</Notification>
		</>
	);
};

export default DeleteDialog;
