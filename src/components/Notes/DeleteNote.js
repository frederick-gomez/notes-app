import React, { useState } from 'react';
import { doc, deleteDoc } from 'firebase/firestore';
import db, { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

//Material UI
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import Card from '@mui/material/Card';
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import LoadingButton from '@mui/lab/LoadingButton';

const DeleteNote = ({ isOpen, handleClose, noteId }) => {
	const [isLoading, setIsLoading] = useState(false);

	const [user] = useAuthState(auth);

	const deleteNote = async (id) => {
		setIsLoading(true);
		const noteDocRef = doc(db, 'users', user.uid, 'notes', id);
		try {
			await deleteDoc(noteDocRef);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
		handleClose();
	};

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
		<Modal open={isOpen} onClose={handleClose}>
			<Card sx={modalStyle}>
				<CardHeader
					title='Are you sure you want to delete this note?'
					titleTypographyProps={{
						component: 'h1',
						variant: 'h6',
						fontFamily: 'Open Sans',
					}}
					subheader='This action is permanent!'
				/>
				<CardActions>
					<Button
						variant='outlined'
						startIcon={<CloseIcon />}
						sx={{ marginLeft: 'auto' }}
						onClick={handleClose}
					>
						Cancel
					</Button>
					<LoadingButton
						endIcon={<DeleteForeverIcon />}
						variant='contained'
						color='error'
						loading={isLoading}
						onClick={() => {
							deleteNote(noteId);
						}}
						autoFocus
					>
						Delete
					</LoadingButton>
				</CardActions>
			</Card>
		</Modal>
	);
};

export default DeleteNote;
