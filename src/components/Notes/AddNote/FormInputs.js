import React, { useState } from 'react';

//Material UI
import TextField from '@mui/material/TextField';
import LabelIcon from '@mui/icons-material/Label';
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/MenuItem';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import AddIcon from '@mui/icons-material/Add';

const FormInputs = ({
	handleTagsChange,
	handleValueChange,
	noteData,
	tags,
}) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [newTag, setNewTag] = useState('');

	const selectAnchorEl = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const closePopper = () => {
		setAnchorEl(null);
	};

	const handleTagDelete = (tag) => {
		console.log(tag);
	};

	const inputStyle = {
		marginBottom: 3,
	};

	const paperStyle = {
		padding: 2,
		minWidth: 250,
		maxHeight: 300,
		overflowY: 'scroll',
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
					<Chip
						onDelete={() => {
							handleTagDelete(tag);
						}}
						key={tag}
						label={tag}
					/>
				))}
			</Box>
			<Button
				onClick={(e) => {
					selectAnchorEl(e);
				}}
				startIcon={<LabelIcon />}>
				Add a Tag
			</Button>
			<Popper
				placement='bottom-start'
				open={Boolean(anchorEl)}
				onClose={closePopper}
				anchorEl={anchorEl}>
				<ClickAwayListener onClickAway={closePopper}>
					<Paper sx={paperStyle} elevation={7} component='form'>
						<TextField
							sx={inputStyle}
							variant='standard'
							name='tags'
							id='tags'
							placeholder='Name a new tag'
							fullWidth
							onChange={(e) => {
								setNewTag(e.target.value);
							}}
							value={newTag}
						/>
						<FormGroup sx={inputStyle}>
							{tags.map((tag) => (
								<FormControlLabel
									key={tag}
									control={
										<Checkbox
											onChange={(e) => {
												console.log(tag);
											}}
										/>
									}
									label={tag}
									value={tag}
								/>
							))}
						</FormGroup>
						<Button
							onClick={() => {
								handleTagsChange(newTag);
								setNewTag('');
							}}
							variant='text'
							startIcon={<AddIcon />}>
							Add tags
						</Button>
					</Paper>
				</ClickAwayListener>
			</Popper>
		</>
	);
};

export default FormInputs;
