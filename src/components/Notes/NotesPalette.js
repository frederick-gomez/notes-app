import React from 'react';
import Popover from '@mui/material/Popover';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const NotesPalette = ({ onClose, anchorEl }) => {
	const colors = [
		'#ccff90',
		'#f28b82',
		'#fbbc04',
		'#fff475',
		'#a7ffeb',
		'#cbf0f8',
		'#aecbfa',
		'#d7aefb',
		'#fdcfe8',
		'#e6c9a8',
	];

	return (
		<Popover
			variant='outlined'
			open={Boolean(anchorEl)}
			onClose={onClose}
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			transformOrigin={{
				vertical: 'bottom',
				horizontal: 'left',
			}}>
			<Container>
				{colors.map((color) => {
					return (
						<Button
							key={color}
							onClick={onClose}
							sx={{
								background: `${color}`,
								borderRadius: '40%',
								margin: '10px',
							}}></Button>
					);
				})}
			</Container>
		</Popover>
	);
};

export default NotesPalette;
