import React from 'react';
import NoteCard from '../Notes/NoteCard';
import NotesContainer from '../UI/NotesContainer';
import useFetchNotes from '../../hooks/useFetchNotes';
import Transition from '../UI/Transition';

const ArchiveNotesList = () => {
	const archivedNotesList = useFetchNotes('isFiled', true);

	return (
		<Transition>
			<NotesContainer>
				{archivedNotesList.map((note) => (
					<NoteCard key={note.id} noteData={note} />
				))}
			</NotesContainer>
		</Transition>
	);
};

export default ArchiveNotesList;
