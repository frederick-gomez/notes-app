import React from 'react';
//MUI
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
	return (
		<TextField
			fullWidth
			margin='dense'
			id='search-bar'
			label='Search'
			variant='outlined'
			size='small'
			sx={{
				maxWidth: '600px',
			}}
			InputProps={{
				startAdornment: (
					<InputAdornment position='start'>
						<SearchIcon />
					</InputAdornment>
				),
			}}
		/>
	);
};

export default SearchBar;
