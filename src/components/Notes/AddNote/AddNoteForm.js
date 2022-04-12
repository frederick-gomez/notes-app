import React from 'react';
//Material UI
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const AddNoteForm = ({ isOpen, closeModal }) => {
	const modalStyle = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		padding: 2,
		borderRadius: '10px',
	};

	const inputStyle = {
		marginBottom: 3,
	};

	return (
		<Modal open={isOpen} onClose={closeModal} closeAfterTransition>
			<Fade in={isOpen}>
				<Card sx={modalStyle} component='form' variant='outlined'>
					<CardHeader title='Add a Note' />
					<CardContent>
						<TextField sx={inputStyle} id='title' label='Title' fullWidth />
						<TextField
							sx={inputStyle}
							id='add-note'
							label='Note'
							minRows={3}
							fullWidth
							multiline
						/>
						<TextField sx={inputStyle} id='tags' label='Tags' fullWidth />
					</CardContent>
					<CardActions>
						<Button
							variant='contained'
							startIcon={<AddIcon />}
							sx={{ marginLeft: 'auto' }}>
							Add Note
						</Button>
						<Button
							onClick={closeModal}
							variant='outlined'
							startIcon={<CloseIcon />}
							color='error'>
							Close
						</Button>
					</CardActions>
				</Card>
			</Fade>
		</Modal>
	);
};

export default AddNoteForm;
