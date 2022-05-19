import React from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import db, { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

//Material UI
import IconButton from '@mui/material/IconButton';
import ArchiveIcon from '@mui/icons-material/Archive';
import EditIcon from '@mui/icons-material/Edit';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import Tooltip from '@mui/material/Tooltip';

const NoteActions = ({ openEdit, noteId, isFiled }) => {
	const [user] = useAuthState(auth);

	const filedNoteHandler = async () => {
		try {
			const noteDocRef = doc(db, 'users', user.uid, 'notes', noteId);
			await updateDoc(noteDocRef, {
				isFiled: !isFiled,
			});
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<>
			{isFiled ? (
				<Tooltip title='Unarchive note'>
					<IconButton onClick={filedNoteHandler}>
						<UnarchiveIcon />
					</IconButton>
				</Tooltip>
			) : (
				<Tooltip title='Archive note'>
					<IconButton onClick={filedNoteHandler}>
						<ArchiveIcon />
					</IconButton>
				</Tooltip>
			)}
			<Tooltip title='Edit note'>
				<IconButton onClick={openEdit}>
					<EditIcon />
				</IconButton>
			</Tooltip>
		</>
	);
};

export default NoteActions;
