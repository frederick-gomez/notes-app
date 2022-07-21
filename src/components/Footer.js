import React from 'react';
import Logo from '../assets/notes-logo.png';

//Material UI
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';

const Footer = () => {
	return (
		<Box sx={{ maxWidth: '90%', marginLeft: 'auto', marginRight: 'auto', flexShrink: 0 }}>
			<Stack
				direction='row'
				spacing={6}
				alignItems='center'
				justifyContent='center'
				sx={{ minHeight: '50px' }}
			>
				<Stack direction='row' spacing={1} alignItems='center' justifyContent='center'>
					<Box
						component='img'
						src={Logo}
						alt='Logo'
						sx={{
							width: 24,
							height: 24,
						}}
					/>
					<Typography
						variant='body1'
						component='h1'
						sx={{ fontFamily: 'Merienda, cursive' }}
						noWrap
					>
						Fantastic Pegasus
					</Typography>
				</Stack>

				<Stack direction='row' spacing={2} alignItems='center' justifyContent='space-between'>
					<Link
						href='https://github.com/frederick-gomez'
						target='_blank'
						rel='noopener noreferrer'
						underline='none'
						color='inherit'
					>
						<Stack alignItems='center' justifyContent='center'>
							<GitHubIcon />
						</Stack>
					</Link>
					<Link
						href='https://www.linkedin.com/in/federico-gomez-dev/'
						target='_blank'
						rel='noopener noreferrer'
						underline='none'
						color='inherit'
					>
						<Stack alignItems='center' justifyContent='center'>
							<LinkedInIcon />
						</Stack>
					</Link>
				</Stack>
			</Stack>
		</Box>
	);
};

export default Footer;
