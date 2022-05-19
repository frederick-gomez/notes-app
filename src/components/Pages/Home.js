import React from 'react';
import { Link } from 'react-router-dom';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Home = () => {
	return (
		<Paper
			sx={{
				padding: 2,
				maxWidth: 500,
				marginLeft: 'auto',
				marginRight: 'auto',
			}}
		>
			<Stack spacing={1}>
				<Typography align='center' variant='h2'>
					Welcome page
				</Typography>
				<Typography align='center'>First log in to create and read your notes</Typography>
				<Button component={Link} to='/auth'>
					Log In
				</Button>
			</Stack>
		</Paper>
	);
};

export default Home;
