import React from 'react';
import { useSelector } from 'react-redux';

//Material UI
import Masonry from '@mui/lab/Masonry';
import Stack from '@mui/material/Stack';

const NotesContainer = ({ children }) => {
	const isListView = useSelector((state) => state.ui.isListView);

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
				{children}
			</Stack>
		);
	} else {
		return (
			<Masonry
				sx={{ margin: 0, alignContent: 'center' }}
				columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
				spacing={3}
			>
				{children}
			</Masonry>
		);
	}
};

export default NotesContainer;
