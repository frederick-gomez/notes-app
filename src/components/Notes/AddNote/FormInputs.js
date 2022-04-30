import React from 'react';

//Material UI
import TextField from '@mui/material/TextField';
// import Chip from '@mui/material/Chip';
// import Box from '@mui/material/Box';
// import LabelIcon from '@mui/icons-material/Label';
// import Button from '@mui/material/Button';
// import Checkbox from '@mui/material/Checkbox';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import AddIcon from '@mui/icons-material/Add';

const FormInputs = ({ handleValueChange, noteData }) => {
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

			{/* <Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: 0.5,
					marginBottom: 2,
				}}
			>
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
				onClick={() => {
					handleTagsChange(newTag);
				}}
				startIcon={<LabelIcon />}
			>
				Add a Tag
			</Button>
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
				startIcon={<AddIcon />}
			>
				Add tags
			</Button> */}
		</>
	);
};

export default FormInputs;
