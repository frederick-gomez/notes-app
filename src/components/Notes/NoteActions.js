import React, { useState } from 'react';
import NotesPalette from './NotesPalette';

//Material UI
import IconButton from '@mui/material/IconButton';
import ArchiveIcon from '@mui/icons-material/Archive';
import PaletteIcon from '@mui/icons-material/Palette';
import EditIcon from '@mui/icons-material/Edit';

const NoteActions = ({ openEdit, showActions, setCurrentColor }) => {
	const [anchorEl, setAnchorEl] = useState(null);

	const selectAnchorEl = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const closePalette = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<IconButton>
				<ArchiveIcon />
			</IconButton>

			<IconButton
				onClick={(e) => {
					selectAnchorEl(e);
					showActions();
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
