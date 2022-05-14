import React, { useEffect, useState, useCallback } from 'react';
import { collection, onSnapshot, where, query } from 'firebase/firestore';
import db, { auth } from '../../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import NoteCard from '../NoteCard';
import NotesContainer from '../../UI/NotesContainer';

const FiledNotesList = () => {
	const [filedNotesList, setFiledNotesList] = useState([]);
	const [user] = useAuthState(auth);

	const fetchFiledNotes = useCallback(async () => {
		try {
			const notesRef = collection(db, 'users', user.uid, 'notes');
			const q = query(notesRef, where('isFiled', '==', true));
			onSnapshot(q, (querySnapshot) => {
				setFiledNotesList(
					querySnapshot.docs.map((doc) => ({
						id: doc.id,
						title: doc.data().title,
						body: doc.data().body,
						isFiled: doc.data().isFiled,
					}))
				);
			});
			console.log('filed notes');
		} catch (error) {
			console.log(error);
		}
	}, [user.uid]);

	useEffect(() => {
		fetchFiledNotes();
	}, [fetchFiledNotes]);

	return (
		<NotesContainer>
			{filedNotesList.map((note) => (
				<NoteCard key={note.id} noteData={note} />
			))}
		</NotesContainer>
	);
};

export default FiledNotesList;
