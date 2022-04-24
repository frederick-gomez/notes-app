import React, { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';

//Material UI
import Popper from '@mui/material/Popper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import ColorizeIcon from '@mui/icons-material/Colorize';
import InvertColorsOffIcon from '@mui/icons-material/InvertColorsOff';

const NotesPalette = ({ onClose, anchorEl, selectColor }) => {
	const themeCtx = useContext(ThemeContext);

	const lightColors = [
		'#f28b82',
		'#fbbc04',
		'#fff475',
		'#ccff90',
		'#a7ffeb',
		'#cbf0f8',
		'#aecbfa',
		'#d7aefb',
		'#fdcfe8',
		'#e6c9a8',
	];

	const darkColors = [
		'#5c2b29',
		'#614a19',
		'#635d19',
		'#345920',
		'#16504b',
		'#2b525b',
		'#1e3a5f',
		'#42275e',
		'#5b2245',
		'#442f19',
	];

	const currentColorTheme = themeCtx ? darkColors : lightColors;

	return (
		<Popper open={Boolean(anchorEl)} onClose={onClose} anchorEl={anchorEl}>
			<Paper elevation={5} sx={{ width: '60%' }}>
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
						{currentColorTheme.map((color) => {
							return (
								<IconButton
									key={color}
									onClick={() => {
										selectColor(color);
									}}
									sx={{
										color: `${color}`,
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
