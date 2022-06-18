import React, { useState } from 'react';
import FormInputs from './FormInputs';
import db, { auth } from '../../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

//Material UI
import Card from '@mui/material/Card';
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

	const handleValueChange = (e) => {
		setNoteData({
			...noteData,
			[e.target.name]: e.target.value,
		});
	};

	const [user] = useAuthState(auth);

	const saveNote = async (data) => {
		try {
			await addDoc(collection(db, 'users', user.uid, 'notes'), {
				title: data.title.trim(),
				body: data.body.trim(),
				isFiled: false,
			});
		} catch (err) {
			console.log(err);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		saveNote(noteData);

		setNoteData({
			title: '',
			body: '',
		});
		closeForm();
	};

	const cardStyle = {
		padding: 1,
		maxWidth: '650px',
		margin: 'auto',
	};

	return (
		<Collapse in={isOpen}>
			<Card onSubmit={handleSubmit} component='form' elevation={4} sx={cardStyle}>
				<CardContent sx={{ paddingBottom: 0 }}>
					<FormInputs handleValueChange={handleValueChange} noteData={noteData} />
				</CardContent>
				<CardActions>
					<Button
						onClick={closeForm}
						variant='outlined'
						startIcon={<CloseIcon />}
						color='error'
						sx={{ marginLeft: 'auto' }}
					>
						Close
					</Button>
					<Button type='submit' variant='contained' endIcon={<AddIcon />}>
						Add Note
					</Button>
				</CardActions>
			</Card>
		</Collapse>
	);
};

export default AddNoteForm;
