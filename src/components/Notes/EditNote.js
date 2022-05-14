import React, { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import db, { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Notification from '../UI/Notification';

//Material UI
import Modal from '@mui/material/Modal';
import Grow from '@mui/material/Grow';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import LoadingButton from '@mui/lab/LoadingButton';

const EditNote = ({ isOpen, handleClose, noteData }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isNotificationOpen, setIsNotificationOpen] = useState(false);
	const [updatedNote, setUpdatedNote] = useState({
		title: noteData.title,
		body: noteData.body,
	});

	const hideNotification = () => setIsNotificationOpen(false);
	const showNotification = () => setIsNotificationOpen(true);

	const handleEditNote = (e) => {
		setUpdatedNote((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const closeModal = () => {
		handleClose();
		setUpdatedNote({
			title: noteData.title,
			body: noteData.body,
		});
	};

	const [user] = useAuthState(auth);

	const updateNote = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const noteDocRef = doc(db, 'users', user.uid, 'notes', noteData.id);
			await updateDoc(noteDocRef, {
				title: updatedNote.title,
				body: updatedNote.body,
			});
		} catch (err) {
			console.log(err);
		} finally {
			setIsLoading(false);
		}

		handleClose();
		showNotification();
	};

	const modalStyle = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%) !important',
		minWidth: 300,
		maxWidth: 500,
		padding: 2,
	};

	const inputStyle = {
		marginBottom: 3,
	};

	return (
		<>
			<Modal open={isOpen} onClose={closeModal}>
				<Grow in={isOpen}>
					<Card sx={modalStyle} component='form' onSubmit={updateNote}>
						<CardHeader
							title='Edit this note'
							titleTypographyProps={{
								component: 'h1',
								variant: 'h5',
								fontFamily: 'Open Sans',
							}}
							action={
								<IconButton type='button' onClick={closeModal}>
									<CloseIcon />
								</IconButton>
							}
						/>

						<CardContent>
							<TextField
								sx={inputStyle}
								name='title'
								id='title'
								label='Title'
								onChange={handleEditNote}
								value={updatedNote.title}
								fullWidth
							/>
							<TextField
								sx={inputStyle}
								name='body'
								id='body'
								label='Note'
								onChange={handleEditNote}
								value={updatedNote.body}
								minRows={3}
								fullWidth
								multiline
							/>
						</CardContent>

						<CardActions>
							<Button
								type='button'
								onClick={closeModal}
								variant='outlined'
								color='error'
								sx={{ marginLeft: 'auto' }}
								startIcon={<CloseIcon />}
							>
								Cancel
							</Button>
							<LoadingButton
								type='submit'
								variant='contained'
								color='primary'
								endIcon={<SaveIcon />}
								loading={isLoading}
							>
								Save
							</LoadingButton>
						</CardActions>
					</Card>
				</Grow>
			</Modal>
			<Notification
				isOpen={isNotificationOpen}
				handleClose={hideNotification}
				alertType='success'
			>
				Note saved
			</Notification>
		</>
	);
};

export default EditNote;
