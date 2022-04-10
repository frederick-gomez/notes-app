import React from 'react';

//Material UI
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

const AddNote = () => {
	return (
		<Container
			sx={{
				display: 'flex',
				justifyContent: 'center',
				marginBottom: 4,
			}}>
			<Paper component='form' elevation={5}>
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
					InputProps={{
						endAdornment: (
							<InputAdornment position='start'>
								<NoteAddIcon />
							</InputAdornment>
						),
					}}
				/>
			</Paper>
		</Container>
	);
};

export default AddNote;
