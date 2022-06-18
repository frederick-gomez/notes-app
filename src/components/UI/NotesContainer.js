import React, { useContext } from 'react';
import NoteViewContext from '../Context/NoteViewContext';
import { AnimatePresence } from 'framer-motion';
//Material UI
import Masonry from '@mui/lab/Masonry';
import Stack from '@mui/material/Stack';

const NotesContainer = ({ children }) => {
	const { isListView } = useContext(NoteViewContext);

	if (isListView) {
		return (
			<Stack
				sx={{
					maxWidth: 600,
					marginLeft: 'auto',
					marginRight: 'auto',
				}}
				spacing={3}
			>
				<AnimatePresence>{children}</AnimatePresence>
			</Stack>
		);
	} else {
		return (
			<Masonry
				sx={{ margin: 0, alignContent: 'center' }}
				columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
				spacing={3}
			>
				<AnimatePresence>{children}</AnimatePresence>
			</Masonry>
		);
	}
};

export default NotesContainer;
