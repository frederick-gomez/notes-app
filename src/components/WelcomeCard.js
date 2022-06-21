import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

//Material UI
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import Alert from '@mui/material/Alert';

const WelcomeCard = ({ style, dismissHandler }) => {
	const [isClicked, setIsClicked] = useState(false);
	const [openSlide, setOpenSlide] = useState(false);

	const containerRef = useRef();

	const enterHandler = () => setIsClicked(true);
	const exitHandler = () => setIsClicked(false);

	const buttonHandler = () => {
		setOpenSlide(true);
		localStorage.setItem('initial', 'false');
		dismissHandler();
	};
	return (
		<>
			<Paper
				sx={style}
				ref={containerRef}
				component={motion.div}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
				layout
			>
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
							onBlur={exitHandler}
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
				<Alert
					sx={style}
					severity='success'
					variant='outlined'
					component={motion.div}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					<Stack>
						<Typography>Thank's for your honest opinion &#128513;</Typography>
					</Stack>
				</Alert>
			</Slide>
		</>
	);
};

export default WelcomeCard;
