import React, { useState } from 'react';

//Material UI
import Modal from '@mui/material/Modal';
import Grow from '@mui/material/Grow';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';

const EditNote = ({ isOpen, handleClose, noteData }) => {
	const [updatedNote, setUpdatedNote] = useState({
		title: noteData.title,
		body: noteData.body,
	});

	const modalStyle = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%) !important',
		minWidth: 300,
		maxWidth: 500,
	};

	const inputStyle = {
		marginBottom: 3,
	};

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

	const updateNote = async (e) => {
		e.preventDefault();
		await fetch(`http://localhost:5000/notes/${noteData.id}`, {
			method: 'PATCH',
			body: JSON.stringify({
				title: updatedNote.title,
				body: updatedNote.body,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});
		closeModal();
		console.log('Updated');
	};

	return (
		<Modal open={isOpen} onClose={closeModal}>
			<Grow in={isOpen}>
				<Box sx={modalStyle} component='form' onSubmit={updateNote}>
					<Card>
						<CardHeader
							title='Edit this note'
							titleTypographyProps={{
								component: 'h1',
								variant: 'h6',
								fontFamily: 'Open Sans',
							}}
							action={
								<IconButton type='button' onClick={closeModal}>
									<ClearIcon />
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
							>
								Cancel
							</Button>
							<Button type='submit' variant='contained' color='success'>
								Save
							</Button>
						</CardActions>
					</Card>
				</Box>
			</Grow>
		</Modal>
	);
};

export default EditNote;
