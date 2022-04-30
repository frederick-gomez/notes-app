import React from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const DeleteSnackbar = ({ isOpen, handleClose }) => {
	return (
		<Snackbar open={isOpen} onClose={handleClose} autoHideDuration={4000}>
			<Alert variant='filled' severity='success' onClose={handleClose}>
				Note deleted succesfully
			</Alert>
		</Snackbar>
	);
};

export default DeleteSnackbar;
