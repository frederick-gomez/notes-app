import React from 'react';
import NoteCard from '../Notes/NoteCard';
import NotesContainer from '../UI/NotesContainer';
import useFetchNotes from '../../hooks/useFetchNotes';

const ArchiveNotesList = () => {
	const archivedNotesList = useFetchNotes('isFiled', true);

	return (
		<NotesContainer>
			{archivedNotesList.map((note) => (
				<NoteCard key={note.id} noteData={note} />
			))}
		</NotesContainer>
	);
};

export default ArchiveNotesList;
