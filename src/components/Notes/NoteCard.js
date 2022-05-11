import React, { useState } from 'react';
import DeleteDialog from '../UI/DeleteDialog';
import EditNote from './EditNote';
import NoteActions from './NoteActions';

//Material UI
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Fade from '@mui/material/Fade';

//Icons
import ClearIcon from '@mui/icons-material/Clear';

const NoteCard = ({ title, body, id }) => {
	const [isActionVisible, setIsActionVisible] = useState(false);
	const [currentColor, setCurrentColor] = useState(null);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [isEditOpen, setIsEditOpen] = useState(false);

	//Card action buttons
	const showActions = () => {
		setIsActionVisible(true);
	};

	// TODO: Hide actions only if menu isn't open
	const hideActions = () => setIsActionVisible(false);

	//Dialog
	const closeDeleteDialog = () => setIsDialogOpen(false);
	const openDeleteDialog = () => setIsDialogOpen(true);

	//Edit
	const openEdit = () => setIsEditOpen(true);
	const closeEdit = () => setIsEditOpen(false);

	const deleteNote = async (id) => {
		await fetch(`http://localhost:5000/notes/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		});
	};

	return (
		<>
			<Card
				onMouseEnter={showActions}
				onMouseLeave={hideActions}
				elevation={3}
				sx={{
					maxWidth: 600,
					backgroundColor: `${currentColor}`,
				}}
			>
				<CardHeader
					title={title}
					titleTypographyProps={{
						component: 'h1',
						variant: 'h6',
						fontFamily: 'Open Sans',
					}}
					action={
						<IconButton onClick={openDeleteDialog}>
							<ClearIcon />
						</IconButton>
					}
				/>

				<CardContent
					sx={{
						paddingTop: 0,
					}}
				>
					<Typography variant='body2'>{body}</Typography>
				</CardContent>

				<Fade in={isActionVisible} timeout={400}>
					<CardActions
						sx={{
							visibility: `${isActionVisible ? '' : 'hidden'}`,
							paddingTop: '0',
						}}
					>
						<NoteActions
							openEdit={openEdit}
							showActions={showActions}
							setCurrentColor={setCurrentColor}
						/>
					</CardActions>
				</Fade>
			</Card>

			<EditNote
				isOpen={isEditOpen}
				handleClose={closeEdit}
				noteData={{
					title,
					body,
					id,
				}}
			/>

			<DeleteDialog
				isOpen={isDialogOpen}
				handleClose={closeDeleteDialog}
				deleteNote={() => deleteNote(id)}
			/>
		</>
	);
};

export default NoteCard;
