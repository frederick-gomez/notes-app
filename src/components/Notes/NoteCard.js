import React, { useState } from 'react';
import EditNote from './EditNote';
import NoteActions from './NoteActions';
import DeleteNote from './DeleteNote';

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

const NoteCard = ({ noteData }) => {
	const [isActionVisible, setIsActionVisible] = useState(false);
	const [currentColor, setCurrentColor] = useState(null);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [isEditOpen, setIsEditOpen] = useState(false);

	//Card action buttons
	// TODO: Hide actions only if menu isn't open
	const showActions = () => setIsActionVisible(true);
	// const hideActions = () => setIsActionVisible(false);

	//Dialog
	const closeDeleteDialog = () => setIsDialogOpen(false);
	const openDeleteDialog = () => setIsDialogOpen(true);

	//Edit
	const openEdit = () => setIsEditOpen(true);
	const closeEdit = () => setIsEditOpen(false);

	return (
		<>
			<Card
				onMouseEnter={showActions}
				// onMouseLeave={hideActions}
				elevation={3}
				sx={{
					maxWidth: 600,
					backgroundColor: `${currentColor}`,
				}}
			>
				<CardHeader
					title={noteData.title}
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
					<Typography variant='body2'>{noteData.body}</Typography>
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
							noteId={noteData.id}
							isFiled={noteData.isFiled}
						/>
					</CardActions>
				</Fade>
			</Card>

			<EditNote
				isOpen={isEditOpen}
				handleClose={closeEdit}
				noteData={noteData}
			/>

			<DeleteNote
				isOpen={isDialogOpen}
				handleClose={closeDeleteDialog}
				noteId={noteData.id}
			/>
		</>
	);
};

export default NoteCard;
