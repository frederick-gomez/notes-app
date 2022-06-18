import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import Transition from '../UI/Transition';

//Material UI
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const paperStyle = {
	marginLeft: 'auto',
	marginRight: 'auto',
	maxWidth: 500,
	minHeight: 400,
	padding: 3,
};

const Home = () => {
	const [user] = useAuthState(auth);

	if (user) {
		return (
			<Transition>
				<Paper sx={paperStyle}>
					<Stack
						spacing={1}
						sx={{
							minWidth: 250,
						}}
					>
						<Typography align='center' component='h1' variant='h5' sx={{ fontFamily: 'Open Sans' }}>
							Welcome!
						</Typography>
						<Typography align='center' variant='body1'>
							Already log in
						</Typography>
						<Stack spacing={1} direction='row' justifyContent='center'>
							<Button component={Link} to='/notes'>
								My Notes
							</Button>
						</Stack>
					</Stack>
				</Paper>
			</Transition>
		);
	}

	return (
		<Transition>
			<Paper sx={paperStyle}>
				<Stack
					spacing={1}
					sx={{
						minWidth: 250,
					}}
				>
					<Typography align='center' component='h1' variant='h5' sx={{ fontFamily: 'Open Sans' }}>
						Welcome!
					</Typography>
					<Typography align='center' variant='body1'>
						Log in or create your account to create and read your notes
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
