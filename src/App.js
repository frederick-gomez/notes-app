import React, { useState } from 'react';
import themeContext from './components/Context/theme-context';
//Components
import Nav from './components/Nav/Nav';
import NotesList from './components/Notes/NotesList';
import AddNote from './components/Notes/AddNote';

//Material UI
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import CssBaseline from '@mui/material/CssBaseline';

//To-Do List
//Fix interaction in NoteCard for the visibility of the action buttons
//Add palette colors for dark mode
//Add sidebar and manage full widht of the content

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
	console.log(isDarkMode);

	return (
		<ThemeProvider theme={isDarkMode ? createTheme(dark) : createTheme(light)}>
			<CssBaseline enableColorScheme>
				<themeContext.Provider value={isDarkMode}>
					<Nav darkModeHandler={changeTheme} isDarkMode={isDarkMode} />
					<main>
						<AddNote />
						<NotesList />
					</main>
				</themeContext.Provider>
			</CssBaseline>
		</ThemeProvider>
	);
}

export default App;
