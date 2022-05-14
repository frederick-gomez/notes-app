import React, { useEffect, useState, useCallback } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import db, { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import NoteCard from './NoteCard';

//Material UI
import Masonry from '@mui/lab/Masonry';
import Stack from '@mui/material/Stack';

const NotesList = ({ isListView }) => {
	const [notesList, setNotesList] = useState([]);

	const [user] = useAuthState(auth);

	const fetchNotes = useCallback(async () => {
		try {
			const q = collection(db, 'users', user.uid, 'notes');
			onSnapshot(q, (querySnapshot) => {
				setNotesList(
					querySnapshot.docs.map((doc) => ({
						id: doc.id,
						title: doc.data().title,
						body: doc.data().body,
					}))
				);
			});
			console.log('read notes');
		} catch (error) {
			console.log(error);
		}
	}, [user.uid]);

	useEffect(() => {
		fetchNotes();
		console.log('Render');
	}, [fetchNotes]);

	if (isListView) {
		return (
			<Stack
				spacing={3}
				sx={{
					maxWidth: 600,
					marginLeft: 'auto',
					marginRight: 'auto',
				}}
			>
				{notesList.map((note) => (
					<NoteCard
						key={note.id}
						id={note.id}
						title={note.title}
						body={note.body}
					/>
				))}
			</Stack>
		);
	} else {
		return (
			<Masonry
				sx={{ margin: 0, alignContent: 'center' }}
				columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
				spacing={3}
			>
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
	}
};

export default NotesList;
