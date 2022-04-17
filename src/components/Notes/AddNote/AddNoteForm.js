import React, { useState } from 'react';
import FormInputs from './FormInputs';
//Material UI
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
	const [noteData, setNoteData] = useState({
		title: '',
		body: '',
	});
	const [tags, setTags] = useState(['work', 'gaming']);

	const handleTagsChange = (e) => {
		setTags(tags.push(e.target.value));
	};

	const handleValueChange = (e) => {
		setNoteData({
			...noteData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(noteData);
	};

	const modalStyle = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		padding: 2,
		borderRadius: '10px',
		minWidth: '300px',
		maxWidth: '500px',
	};

	return (
		<Modal open={isOpen} onClose={closeModal} closeAfterTransition>
			<Fade in={isOpen}>
				<Card
					onSubmit={handleSubmit}
					sx={modalStyle}
					component='form'
					variant='outlined'>
					<CardHeader title='Add a Note' />
					<CardContent>
						<FormInputs
							handleValueChange={handleValueChange}
							tags={tags}
							noteData={noteData}
						/>
					</CardContent>
					<CardActions>
						<Button
							type='submit'
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
