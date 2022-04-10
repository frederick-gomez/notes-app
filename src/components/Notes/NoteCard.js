import React, { useState } from 'react';
import NotesPalette from './NotesPalette';
//Material UI
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import ArchiveIcon from '@mui/icons-material/Archive';
import PaletteIcon from '@mui/icons-material/Palette';
import Fade from '@mui/material/Fade';

const NoteCard = () => {
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
		<Grid
			item
			xs={12}
			sm={6}
			md={4}
			lg={2}
			onMouseEnter={() => setIsActionVisible(true)}
			onMouseLeave={closeActions}>
			<Card
				elevation={5}
				sx={{
					backgroundColor: `${currentColor}`,
				}}>
				<CardHeader
					title={'Titulo'}
					subheader={'work'}
					action={
						<IconButton>
							<ClearIcon />
						</IconButton>
					}
				/>
				<CardContent>
					<Typography variant='body2'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequuntur quia perferendis dolorum, aperiam blanditiis veritatis
						magnam necessitatibus, minus quos dolorem aut sunt? Ad sunt tempore
						facilis dolorum. Nobis, ullam soluta.
					</Typography>
				</CardContent>
				<Fade in={isActionVisible} timeout={400}>
					<CardActions
						sx={{
							visibility: `${isActionVisible ? '' : 'hidden'}`,
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
		</Grid>
	);
};

export default NoteCard;
