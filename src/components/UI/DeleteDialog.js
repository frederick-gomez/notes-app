import React from 'react';

//Material UI
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

const DeleteDialog = ({ isOpen, handleClose, deleteNote, openSnackbar }) => {
	return (
		<Dialog open={isOpen} onClose={handleClose}>
			<DialogTitle id='confirm-delete-dialog'>
				{'Are you sure you want to delete this note?'}
			</DialogTitle>
			<DialogActions>
				<Button onClick={handleClose}>Cancel</Button>
				<Button
					variant='contained'
					color='error'
					onClick={() => {
						deleteNote();
						handleClose();
						openSnackbar();
					}}
					autoFocus
				>
					Delete
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default DeleteDialog;
