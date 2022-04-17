import React, { useState } from 'react';

//Material UI
import TextField from '@mui/material/TextField';
import LabelIcon from '@mui/icons-material/Label';
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const FormInputs = ({ handleValueChange, noteData, tags }) => {
	const [anchorEl, setAnchorEl] = useState(null);

	const selectAnchorEl = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const closePopper = () => {
		setAnchorEl(null);
	};

	const inputStyle = {
		marginBottom: 3,
	};

	return (
		<>
			<TextField
				sx={inputStyle}
				name='title'
				id='title'
				label='Title'
				onChange={handleValueChange}
				value={noteData.title}
				fullWidth
			/>
			<TextField
				sx={inputStyle}
				name='body'
				id='add-note'
				label='Note'
				onChange={handleValueChange}
				value={noteData.body}
				minRows={3}
				fullWidth
				multiline
			/>
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: 0.5,
					marginBottom: 2,
				}}>
				{tags.map((tag) => (
					<Chip key={tag} label={tag} />
				))}
			</Box>
			<Button
				onClick={(e) => {
					selectAnchorEl(e);
				}}
				startIcon={<LabelIcon />}
				sx={{ marginLeft: 'auto' }}>
				Add a Tag
			</Button>
			<Popper
				open={Boolean(anchorEl)}
				onClose={closePopper}
				anchorEl={anchorEl}>
				<Paper></Paper>
			</Popper>
		</>
	);
};

export default FormInputs;
