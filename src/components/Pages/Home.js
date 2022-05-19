import React from 'react';
import { Link } from 'react-router-dom';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Home = () => {
	const paperStyle = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		padding: 3,
	};

	const stackStyle = {
		minWidth: 250,
	};

	return (
		<Paper sx={paperStyle}>
			<Stack spacing={1} sx={stackStyle}>
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
	);
};

export default Home;
