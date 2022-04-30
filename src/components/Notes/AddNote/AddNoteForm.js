import React, { useState } from 'react';
import FormInputs from './FormInputs';

//Material UI
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const AddNoteForm = ({ isOpen, closeForm }) => {
	const [noteData, setNoteData] = useState({
		title: '',
		body: '',
	});

	const handleValueChange = (e) => {
		setNoteData({
			...noteData,
			[e.target.name]: e.target.value,
		});
	};

	const saveNote = async (data) => {
		await fetch('http://localhost:5000/notes', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(noteData);
		saveNote(noteData);

		closeForm();
		setNoteData({
			title: '',
			body: '',
		});
	};

	const modalStyle = {
		padding: 2,
		borderRadius: '10px',
		minWidth: '300px',
		maxWidth: '500px',
	};

	return (
		<Collapse in={isOpen}>
			<Card
				onSubmit={handleSubmit}
				component='form'
				elevation={4}
				sx={modalStyle}
			>
				<CardHeader title='Add a Note' />
				<CardContent>
					<FormInputs
						handleValueChange={handleValueChange}
						noteData={noteData}
					/>
				</CardContent>
				<CardActions>
					<Button
						type='submit'
						variant='contained'
						startIcon={<AddIcon />}
						sx={{ marginLeft: 'auto' }}
					>
						Add Note
					</Button>
					<Button
						onClick={closeForm}
						variant='outlined'
						startIcon={<CloseIcon />}
						color='error'
					>
						Close
					</Button>
				</CardActions>
			</Card>
		</Collapse>
	);
};

export default AddNoteForm;
