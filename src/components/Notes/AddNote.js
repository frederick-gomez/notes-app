import React, { useState } from 'react';
import AddNoteForm from './AddNoteForm';

//Material UI
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

const AddNote = () => {
	const [isNotesForm, setIsNotesForm] = useState(false);

	const openNotesForm = () => {
		setIsNotesForm(true);
	};
	return (
		<Container
			sx={{
				display: 'flex',
				justifyContent: 'center',
				marginBottom: 4,
			}}>
			{!isNotesForm ? (
				<Button
					onClick={openNotesForm}
					variant='contained'
					fullWidth
					size='large'
					endIcon={<NoteAddIcon />}
					sx={{
						maxWidth: '500px',
					}}>
					Add a note
				</Button>
			) : (
				<AddNoteForm />
			)}
		</Container>
	);
};

export default AddNote;
