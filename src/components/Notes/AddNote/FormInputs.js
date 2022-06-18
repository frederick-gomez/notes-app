import React from 'react';

//Material UI
import TextField from '@mui/material/TextField';

const FormInputs = ({ handleValueChange, noteData }) => {
	const inputStyle = {
		marginBottom: 2,
	};

	return (
		<>
			<TextField
				sx={inputStyle}
				variant='standard'
				name='title'
				id='title'
				label='Title'
				onChange={handleValueChange}
				value={noteData.title}
				fullWidth
				multiline
			/>
			<TextField
				sx={inputStyle}
				variant='standard'
				name='body'
				id='add-note'
				label='Note'
				onChange={handleValueChange}
				value={noteData.body}
				placeholder='Take a note...'
				fullWidth
				multiline
			/>
		</>
	);
};

export default FormInputs;
