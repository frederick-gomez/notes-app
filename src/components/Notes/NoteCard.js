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
import ClearIcon from '@mui/icons-material/Clear';
import ArchiveIcon from '@mui/icons-material/Archive';
import PaletteIcon from '@mui/icons-material/Palette';
import Fade from '@mui/material/Fade';
import DeleteSnackbar from '../UI/DeleteSnackbar';

const NoteCard = ({ title, body, id }) => {
	const [isActionVisible, setIsActionVisible] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const [currentColor, setCurrentColor] = useState(null);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

	const selectAnchorEl = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const toggleActions = () => {
		setIsActionVisible((prevState) => prevState);
	};

	const closePalette = () => {
		setAnchorEl(null);
	};

	//Hide actions only if menu isn't open
	const closeActions = () => {
		if (anchorEl) {
			return;
		} else {
			setIsActionVisible(false);
		}
	};

	const openSnackbar = () => {
		setIsSnackbarOpen(true);
	};

	const closeSnackbar = () => {
		setIsSnackbarOpen(false);
	};

	const closeDialog = () => {
		setIsDialogOpen(false);
	};

	const confirmDelete = () => {
		setIsDialogOpen(true);
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
				onMouseEnter={() => setIsActionVisible(true)}
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
								toggleActions();
							}}
						>
							<PaletteIcon />
						</IconButton>
						<NotesPalette
							onClose={closePalette}
							anchorEl={anchorEl}
							selectColor={setCurrentColor}
						/>
					</CardActions>
				</Fade>
			</Card>
			<DeleteDialog
				isOpen={isDialogOpen}
				handleClose={closeDialog}
				deleteNote={() => deleteNote(id)}
				openSnackbar={openSnackbar}
			/>
			<DeleteSnackbar isOpen={isSnackbarOpen} handleClose={closeSnackbar} />
		</>
	);
};

export default NoteCard;
