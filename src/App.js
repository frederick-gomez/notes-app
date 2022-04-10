import React, { useState } from 'react';
import Nav from './components/Nav/Nav';
import NotesList from './components/Notes/NotesList';
import AddNote from './components/Notes/AddNote';

//Material UI
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import CssBaseline from '@mui/material/CssBaseline';

//To-Do List
//Fix interaction in NoteCard for the visibility of the action buttons

const light = {
	palette: {
		mode: 'light',
	},
};

const dark = {
	palette: {
		mode: 'dark',
	},
};

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const changeTheme = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<ThemeProvider theme={isDarkMode ? createTheme(dark) : createTheme(light)}>
			<CssBaseline enableColorScheme>
				<Nav darkModeHandler={changeTheme} isDarkMode={isDarkMode} />
				<AddNote />
				<NotesList />
			</CssBaseline>
		</ThemeProvider>
	);
}

export default App;
