import React from 'react';
import NoteCard from '../Notes/NoteCard';
import NotesContainer from '../UI/NotesContainer';
import AddNote from '../Notes/AddNote/AddNote';
import useFetchNotes from '../../hooks/useFetchNotes';

const NotesList = () => {
	const notesList = useFetchNotes('isFiled', false);

	return (
		<>
			<AddNote />
			<NotesContainer>
				{notesList.map((note) => (
					<NoteCard key={note.id} noteData={note} />
				))}
			</NotesContainer>
		</>
	);
};

export default NotesList;
