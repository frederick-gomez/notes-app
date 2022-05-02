import React, { useState } from 'react';
import AddNoteForm from './AddNoteForm';

//Material UI
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

const AddNote = () => {
	const [isNotesForm, setIsNotesForm] = useState(false);

	const openNotesForm = () => {
		setIsNotesForm(true);
	};

	const closeNotesForm = () => {
		setIsNotesForm(false);
	};
	return (
		<Container
			sx={{
				display: 'flex',
				justifyContent: 'center',
				marginBottom: 4,
			}}
		>
			<Box>
				<Collapse in={!isNotesForm}>
					<Button
						onClick={openNotesForm}
						variant='contained'
						fullWidth
						size='large'
						endIcon={<NoteAddIcon />}
						sx={{
							maxWidth: 500,
						}}
					>
						Add a note
					</Button>
				</Collapse>
				<AddNoteForm isOpen={isNotesForm} closeForm={closeNotesForm} />
			</Box>
		</Container>
	);
};

export default AddNote;
