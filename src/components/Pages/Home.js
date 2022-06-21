import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import Transition from '../UI/Transition';
import NavigationCard from '../NavigationCard';
import { AnimatePresence } from 'framer-motion';

//Material UI
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import WelcomeCard from '../WelcomeCard';

const paperStyle = {
	marginLeft: 'auto',
	marginRight: 'auto',
	display: 'flex',
	justifyContent: 'center',
	maxWidth: 500,
	padding: 3,
};

const Home = () => {
	const [user] = useAuthState(auth);
	const [initial, setInitial] = useState(true);

	useEffect(() => {
		const firstRender = localStorage.getItem('initial');
		if (firstRender === 'false') {
			setInitial(false);
		}
	}, []);

	const dismissHandler = () => {
		setTimeout(() => {
			setInitial(false);
		}, 5000);
	};

	if (user) {
		return (
			<Transition>
				<Stack spacing={2} alignItems='center'>
					<AnimatePresence>
						<NavigationCard key='1' style={paperStyle} />
						{initial && <WelcomeCard key='2' style={paperStyle} dismissHandler={dismissHandler} />}
					</AnimatePresence>
				</Stack>
			</Transition>
		);
	}

	return (
		<Transition>
			<Paper sx={paperStyle}>
				<Stack spacing={1} justifyContent='center'>
					<Typography align='center' component='h1' variant='h5' sx={{ fontFamily: 'Open Sans' }}>
						Welcome!
					</Typography>
					<Typography align='center' variant='body1'>
						Ready to write your boring &#10024;grocery list&#10024;?
					</Typography>
					<Stack spacing={1} direction='row' justifyContent='center'>
						<Button component={Link} to='/login'>
							Log In
						</Button>
						<Button component={Link} to='/register'>
							Register
						</Button>
					</Stack>
				</Stack>
			</Paper>
		</Transition>
	);
};

export default Home;
