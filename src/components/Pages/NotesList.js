import React from 'react';
import NoteCard from '../Notes/NoteCard';
import NotesContainer from '../UI/NotesContainer';
import AddNote from '../Notes/AddNote/AddNote';
import useFetchNotes from '../../hooks/useFetchNotes';
import Transition from '../UI/Transition';

//Material UI
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import NoteAltIcon from '@mui/icons-material/NoteAlt';

const NotesList = () => {
	const notesList = useFetchNotes('isFiled', false);

	const boxStyle = {
		marginTop: 5,
		zIndex: '-1000',
	};

	if (notesList.length === 0) {
		return (
			<Transition>
				<AddNote />
				<br />
				<Stack spacing={1} alignItems='center' sx={boxStyle}>
					<NoteAltIcon
						sx={{
							color: 'rgba(154,160,166,0.5)',
							height: '4em',
							width: '4em',
						}}
					/>
					<Typography
						align='center'
						variant='h5'
						component='h2'
						sx={{
							fontFamily: 'Open Sans',
							fontStyle: 'italic',
							color: 'rgba(154,160,166,0.5)',
							userSelect: 'none',
						}}
					>
						Notes you add appear here
					</Typography>
				</Stack>
			</Transition>
		);
	}

	return (
		<Transition>
			<AddNote />
			<NotesContainer>
				{notesList.map((note) => (
					<NoteCard key={note.id} noteData={note} />
				))}
			</NotesContainer>
		</Transition>
	);
};

export default NotesList;
