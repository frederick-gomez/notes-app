import { useEffect, useState, useCallback } from 'react';
import { collection, onSnapshot, where, query } from 'firebase/firestore';
import db, { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const useFetchNotes = (param1, param2) => {
	const [notesList, setNotesList] = useState([]);
	const [user] = useAuthState(auth);

	const fetchNotes = useCallback(async () => {
		if (!user) {
			return;
		}
		try {
			const notesRef = collection(db, 'users', user.uid, 'notes');
			const q = query(notesRef, where(param1, '==', param2));
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
	}, [user, param1, param2]);

	useEffect(() => {
		fetchNotes();
	}, [fetchNotes]);

	return notesList;
};

export default useFetchNotes;
