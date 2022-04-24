import React, { useEffect, useState } from 'react';
import NoteCard from './NoteCard';
import Masonry from '@mui/lab/Masonry';

const NotesList = ({ isListView }) => {
	const [notesList, setNotesList] = useState([]);

	const fetchNotes = async () => {
		const response = await fetch('http://localhost:5000/notes', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});
		const data = await response.json();
		setNotesList(data);
	};

	useEffect(() => {
		fetchNotes();
	}, []);

	const listView = 1;
	const gridView = { xs: 1, sm: 2, md: 3, lg: 4 };

	return (
		<Masonry
			sx={{ margin: 0, alignContent: 'center' }}
			columns={isListView ? listView : gridView}
			spacing={3}>
			{notesList.map((note) => (
				<NoteCard
					key={note.id}
					id={note.id}
					title={note.title}
					body={note.body}
				/>
			))}
		</Masonry>
	);
};

export default NotesList;
