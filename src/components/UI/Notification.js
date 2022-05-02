import React from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const Notification = ({ isOpen, handleClose, alertType, children }) => {
	return (
		<Snackbar open={isOpen} onClose={handleClose} autoHideDuration={4000}>
			<Alert variant='filled' severity={alertType} onClose={handleClose}>
				{children}
			</Alert>
		</Snackbar>
	);
};

export default Notification;
