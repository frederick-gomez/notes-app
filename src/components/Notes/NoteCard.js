import React, { useState } from 'react';
import NotesPalette from './NotesPalette';

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

const NoteCard = ({ title, body }) => {
	const [isActionVisible, setIsActionVisible] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const [currentColor, setCurrentColor] = useState(null);

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

	return (
		<Card
			onMouseEnter={() => setIsActionVisible(true)}
			onMouseLeave={closeActions}
			elevation={3}
			sx={{
				maxWidth: 600,
				backgroundColor: `${currentColor}`,
			}}>
			<CardHeader
				title={title}
				titleTypographyProps={{
					component: 'h1',
					variant: 'h6',
					fontFamily: 'Open Sans',
				}}
				action={
					<IconButton>
						<ClearIcon />
					</IconButton>
				}
			/>
			<CardContent
				sx={{
					paddingTop: 0,
				}}>
				<Typography variant='body2'>{body}</Typography>
			</CardContent>
			<Fade in={isActionVisible} timeout={400}>
				<CardActions
					sx={{
						visibility: `${isActionVisible ? '' : 'hidden'}`,
						paddingTop: '0',
					}}>
					<IconButton>
						<ArchiveIcon />
					</IconButton>
					<IconButton
						onClick={(e) => {
							selectAnchorEl(e);
							toggleActions();
						}}>
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
	);
};

export default NoteCard;
