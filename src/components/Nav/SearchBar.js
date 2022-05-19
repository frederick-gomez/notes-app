import React from 'react';

//MUI
import useMediaQuery from '@mui/material/useMediaQuery';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
	const tabletSize = useMediaQuery('(max-width:599px)');

	if (tabletSize) {
		return (
			<IconButton>
				<SearchIcon fontSize='large' />
			</IconButton>
		);
	} else {
		return (
			<Box
				component='form'
				sx={{
					maxWidth: 500,
					marginLeft: 1,
				}}
			>
				<TextField
					fullWidth
					margin='dense'
					id='search-bar'
					placeholder='Search your notes...'
					size='small'
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<SearchIcon />
							</InputAdornment>
						),
					}}
				/>
			</Box>
		);
	}
};

export default SearchBar;
