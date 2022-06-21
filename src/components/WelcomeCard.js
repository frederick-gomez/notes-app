import React, { useState, useRef } from 'react';

//Material UI
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';

const WelcomeCard = ({ style }) => {
	const [isClicked, setIsClicked] = useState(false);
	const [openSlide, setOpenSlide] = useState(false);

	const containerRef = useRef();

	const enterHandler = () => setIsClicked(true);
	const exitHandler = () => setIsClicked(false);

	const buttonHandler = () => {
		setOpenSlide(true);
		localStorage.setItem('initial', 'false');
	};
	return (
		<>
			<Paper sx={style} ref={containerRef}>
				<Stack spacing={1}>
					<Typography align='center' component='h1' variant='h5' sx={{ fontFamily: 'Open Sans' }}>
						Well...
					</Typography>
					<Typography align='center' variant='body1' gutterBottom>
						Let's adress the elefant in the room, what does a Fantastic Pegasus &#129412; have to do
						with a note taking website?...
						<br /> Absolutely nothing, but sounds really cool, right?
					</Typography>
					<Stack spacing={1} direction='row' justifyContent='center'>
						<Button
							onClick={buttonHandler}
							onMouseDown={enterHandler}
							onMouseOver={enterHandler}
							onMouseOut={exitHandler}
							onFocus={enterHandler}
							variant='contained'
							color={isClicked ? 'success' : 'error'}
						>
							{isClicked ? 'Of course!' : 'Actually no'}
						</Button>
						<Button onClick={buttonHandler} variant='contained' color='success'>
							Yeah, awesome!
						</Button>
					</Stack>
				</Stack>
			</Paper>
			<Slide
				direction='up'
				in={openSlide}
				container={containerRef.current}
				mountOnEnter
				unmountOnExit
			>
				<Paper
					sx={{
						...style,
						marginTop: 2,
						maxWidth: 400,
						backgroundColor: 'info',
					}}
				>
					<Stack>
						<Typography>Thank's for your honest opinion &#128513;</Typography>
					</Stack>
				</Paper>
			</Slide>
		</>
	);
};

export default WelcomeCard;
