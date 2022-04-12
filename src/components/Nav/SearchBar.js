import React from 'react';
//MUI
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
	return (
		<Box component='form'>
			<TextField
				fullWidth
				margin='dense'
				id='search-bar'
				placeholder='Search...'
				size='small'
				sx={{
					maxWidth: '250px',
				}}
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
};

export default SearchBar;
