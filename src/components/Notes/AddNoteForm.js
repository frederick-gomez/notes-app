import React from 'react';
//Material UI
import TextField from '@mui/material/TextField';

const AddNoteForm = () => {
	return (
		<TextField
			sx={{
				minWidth: '250px',
				maxWidth: '550px',
			}}
			fullWidth
			size='small'
			id='add-note'
			label='Add a note...'
			multiline
		/>
	);
};

export default AddNoteForm;
