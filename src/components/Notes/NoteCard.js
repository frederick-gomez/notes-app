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

	const selectAnchorEl = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const closePalette = () => {
		setAnchorEl(null);
	};

	return (
		<Grid
			item
			xs={12}
			sm={6}
			md={4}
			lg={2}
			onMouseEnter={() => setIsActionVisible(true)}
			onMouseLeave={() => setIsActionVisible(false)}>
			<Card elevation={5}>
				<CardHeader
					title={'titulo'}
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
				<Fade in={isActionVisible} exit timeout={400}>
					<CardActions
						sx={{
							visibility: `${isActionVisible ? '' : 'hidden'}`,
						}}>
						<IconButton>
							<ArchiveIcon />
						</IconButton>
						<IconButton onClick={(e) => selectAnchorEl(e)}>
							<PaletteIcon />
						</IconButton>
						<NotesPalette onClose={closePalette} anchorEl={anchorEl} />
					</CardActions>
				</Fade>
			</Card>
		</Grid>
	);
};

export default NoteCard;
