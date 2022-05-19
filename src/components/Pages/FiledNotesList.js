import React from 'react';
import NoteCard from '../Notes/NoteCard';
import NotesContainer from '../UI/NotesContainer';
import useFetchNotes from '../../hooks/useFetchNotes';

const FiledNotesList = () => {
	const filedNotesList = useFetchNotes('isFiled', true);

	return (
		<NotesContainer>
			{filedNotesList.map((note) => (
				<NoteCard key={note.id} noteData={note} />
			))}
		</NotesContainer>
	);
};

export default FiledNotesList;
