import React, { useState } from 'react';
import FormInputs from './FormInputs';

//Material UI
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const AddNoteForm = ({ isOpen, closeForm }) => {
	const [noteData, setNoteData] = useState({
		title: '',
		body: '',
	});
	const [tags, setTags] = useState(['work', 'gaming']);

	const handleTagsChange = (newTag) => {
		if (!newTag.trim()) {
			return;
		}
		if (!tags.includes(newTag)) {
			setTags([...tags, newTag]);
		}
	};

	const handleValueChange = (e) => {
		setNoteData({
			...noteData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(noteData);
		console.log(tags);

		closeForm();
		setNoteData({
			title: '',
			body: '',
		});
		setTags([]);
	};

	const modalStyle = {
		padding: 2,
		borderRadius: '10px',
		minWidth: '300px',
		maxWidth: '500px',
	};

	return (
		<Collapse in={isOpen}>
			<Card
				onSubmit={handleSubmit}
				component='form'
				elevation={4}
				sx={modalStyle}>
				<CardHeader title='Add a Note' />
				<CardContent>
					<FormInputs
						handleValueChange={handleValueChange}
						handleTagsChange={handleTagsChange}
						tags={tags}
						noteData={noteData}
					/>
				</CardContent>
				<CardActions>
					<Button
						type='submit'
						variant='contained'
						startIcon={<AddIcon />}
						sx={{ marginLeft: 'auto' }}>
						Add Note
					</Button>
					<Button
						onClick={closeForm}
						variant='outlined'
						startIcon={<CloseIcon />}
						color='error'>
						Close
					</Button>
				</CardActions>
			</Card>
		</Collapse>
	);
};

export default AddNoteForm;
