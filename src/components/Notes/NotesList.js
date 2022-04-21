import Grid from '@mui/material/Grid';
import React from 'react';
import NoteCard from './NoteCard';

const NotesList = () => {
	return (
		<div>
			<Grid container spacing={3}>
				<NoteCard />
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
