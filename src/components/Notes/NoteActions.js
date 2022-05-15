import React, { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import db, { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import NotesPalette from './NotesPalette';

//Material UI
import IconButton from '@mui/material/IconButton';
import ArchiveIcon from '@mui/icons-material/Archive';
import PaletteIcon from '@mui/icons-material/Palette';
import EditIcon from '@mui/icons-material/Edit';
import UnarchiveIcon from '@mui/icons-material/Unarchive';

const NoteActions = ({ openEdit, setCurrentColor, noteId, isFiled }) => {
	const [anchorEl, setAnchorEl] = useState(null);

	const selectAnchorEl = (event) => setAnchorEl(event.currentTarget);
	const closePalette = () => setAnchorEl(null);

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
				<IconButton onClick={filedNoteHandler}>
					<UnarchiveIcon />
				</IconButton>
			) : (
				<IconButton onClick={filedNoteHandler}>
					<ArchiveIcon />
				</IconButton>
			)}

			<IconButton
				onClick={(e) => {
					selectAnchorEl(e);
				}}
			>
				<PaletteIcon />
			</IconButton>

			<NotesPalette
				onClose={closePalette}
				anchorEl={anchorEl}
				selectColor={setCurrentColor}
			/>

			<IconButton onClick={openEdit}>
				<EditIcon />
			</IconButton>
		</>
	);
};

export default NoteActions;
