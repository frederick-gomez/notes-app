import React, { useState } from 'react';
import AddNoteForm from './AddNoteForm';

//Material UI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

const AddNote = () => {
	const [isNotesForm, setIsNotesForm] = useState(false);
	const openNotesForm = () => setIsNotesForm(true);
	const closeNotesForm = () => setIsNotesForm(false);

	return (
		<Box
			sx={{
				marginBottom: 4,
			}}
		>
			<Collapse
				in={!isNotesForm}
				sx={{
					maxWidth: 650,
					margin: 'auto',
				}}
			>
				<Button
					onClick={openNotesForm}
					variant='contained'
					fullWidth
					size='large'
					endIcon={<NoteAddIcon />}
				>
					Add a note
				</Button>
			</Collapse>
			<AddNoteForm isOpen={isNotesForm} closeForm={closeNotesForm} />
		</Box>
	);
};

export default AddNote;
