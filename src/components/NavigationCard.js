import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

//Matertial UI
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NavigationCard = ({ style }) => {
	return (
		<Paper
			sx={style}
			component={motion.div}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			layout
		>
			<Stack spacing={1}>
				<Typography align='center' component='h1' variant='h5' sx={{ fontFamily: 'Open Sans' }}>
					Start writing!
				</Typography>
				<Typography align='center' variant='body1' gutterBottom>
					You can use the link below or the side menu to navigate.
				</Typography>
				<Stack spacing={1} direction='row' justifyContent='center'>
					<Button component={Link} to='/notes'>
						My Notes
					</Button>
				</Stack>
			</Stack>
		</Paper>
	);
};

export default NavigationCard;
