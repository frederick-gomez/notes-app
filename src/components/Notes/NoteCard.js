import React, { useState } from 'react';
import NotesPalette from './NotesPalette';
import DeleteDialog from '../UI/DeleteDialog';

//Material UI
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Fade from '@mui/material/Fade';
import AlertSnackbar from '../UI/AlertSnackbar';

//Icons
import ClearIcon from '@mui/icons-material/Clear';
import ArchiveIcon from '@mui/icons-material/Archive';
import PaletteIcon from '@mui/icons-material/Palette';
import EditIcon from '@mui/icons-material/Edit';
import EditNote from './EditNote';

const NoteCard = ({ title, body, id }) => {
	const [isActionVisible, setIsActionVisible] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const [currentColor, setCurrentColor] = useState(null);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
	const [isEditOpen, setIsEditOpen] = useState(false);

	const selectAnchorEl = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const closePalette = () => {
		setAnchorEl(null);
	};

	const openActions = () => {
		setIsActionVisible(!isActionVisible);
	};

	// TODO: Hide actions only if menu isn't open
	const closeActions = () => {
		if (anchorEl) {
			return;
		} else {
			setIsActionVisible(false);
		}
	};

	//Snackbar
	const openSnackbar = () => {
		setIsSnackbarOpen(true);
	};

	const closeSnackbar = () => {
		setIsSnackbarOpen(false);
	};

	//Dialog
	const closeDialog = () => {
		setIsDialogOpen(false);
	};

	const confirmDelete = () => {
		setIsDialogOpen(true);
	};

	//Edit
	const openEdit = () => {
		setIsEditOpen(true);
	};

	const closeEdit = () => {
		setIsEditOpen(false);
	};

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
				onMouseEnter={openActions}
				onMouseLeave={closeActions}
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
						<IconButton onClick={confirmDelete}>
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
						<IconButton>
							<ArchiveIcon />
						</IconButton>

						<IconButton
							onClick={(e) => {
								selectAnchorEl(e);
								openActions();
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
				handleClose={closeDialog}
				deleteNote={() => deleteNote(id)}
				openSnackbar={openSnackbar}
			/>
			<AlertSnackbar
				isOpen={isSnackbarOpen}
				handleClose={closeSnackbar}
				alertType='success'
			>
				Note deleted succesful
			</AlertSnackbar>
		</>
	);
};

export default NoteCard;
