import React, { useEffect, useState, useCallback } from 'react';
import { collection, onSnapshot, where, query } from 'firebase/firestore';
import db, { auth } from '../../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import NoteCard from '../NoteCard';
import NotesContainer from '../../UI/NotesContainer';

const NotesList = () => {
	const [notesList, setNotesList] = useState([]);
	const [user] = useAuthState(auth);

	const fetchNotes = useCallback(async () => {
		try {
			const notesRef = collection(db, 'users', user.uid, 'notes');
			const q = query(notesRef, where('isFiled', '==', false));
			onSnapshot(q, (querySnapshot) => {
				setNotesList(
					querySnapshot.docs.map((doc) => ({
						id: doc.id,
						title: doc.data().title,
						body: doc.data().body,
						isFiled: doc.data().isFiled,
					}))
				);
			});
		} catch (error) {
			console.log(error);
		}
	}, [user.uid]);

	useEffect(() => {
		fetchNotes();
	}, [fetchNotes]);

	return (
		<NotesContainer>
			{notesList.map((note) => (
				<NoteCard key={note.id} noteData={note} />
			))}
		</NotesContainer>
	);
};

export default NotesList;
