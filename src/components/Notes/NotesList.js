import Grid from '@mui/material/Grid';
import React from 'react';
import NoteCard from './NoteCard';

const NotesList = () => {
	return (
		<div>
			<Grid container spacing={3} justifyContent='center' alignItems='center'>
				<NoteCard />
				<NoteCard />
				<NoteCard />
				<NoteCard />
				<NoteCard />
			</Grid>
		</div>
	);
};

export default NotesList;
