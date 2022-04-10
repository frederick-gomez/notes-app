import React from 'react';
import Popper from '@mui/material/Popper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import ColorizeIcon from '@mui/icons-material/Colorize';
import InvertColorsOffIcon from '@mui/icons-material/InvertColorsOff';

const NotesPalette = ({ onClose, anchorEl, selectColor }) => {
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
		<Popper open={Boolean(anchorEl)} onClose={onClose} anchorEl={anchorEl}>
			<Paper elevation={7} sx={{ width: '60%' }}>
				<ClickAwayListener onClickAway={onClose}>
					<Stack
						flexWrap='wrap'
						justifyContent='space-between'
						direction='row'
						sx={{
							p: 1,
						}}>
						<IconButton
							key={'noColor'}
							onClick={() => {
								selectColor(null);
							}}
							sx={{
								backgroundColor: '#dfdfdf',
								margin: '5px 0 5px 0',
							}}>
							<InvertColorsOffIcon />
						</IconButton>
						{colors.map((color) => {
							return (
								<IconButton
									key={color}
									onClick={() => {
										selectColor(color);
									}}
									sx={{
										backgroundColor: `${color}`,
										margin: '5px 0 5px 0',
									}}>
									<ColorizeIcon />
								</IconButton>
							);
						})}
					</Stack>
				</ClickAwayListener>
			</Paper>
		</Popper>
	);
};

export default NotesPalette;
