import React, { useState } from 'react';
import './App.css';
import ThemeContext from './components/Context/ThemeContext';
//Components
import Nav from './components/Nav/Nav';
import NotesList from './components/Notes/NotesList';
import AddNote from './components/Notes/AddNote/AddNote';

//Material UI
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import CssBaseline from '@mui/material/CssBaseline';

// TODO: Fix interaction in NoteCard for the visibility of the action buttons
// TODO: Update notes colors on theme change
// TODO: Save data on AddNote form
// TODO: Implement tags feature
// ? Use react-context or Redux?

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
	const [isListView, setIsListView] = useState(false);

	const listViewHandler = () => {
		setIsListView(!isListView);
	};

	const darkModeHandler = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<ThemeProvider theme={isDarkMode ? createTheme(dark) : createTheme(light)}>
			<CssBaseline enableColorScheme>
				<ThemeContext.Provider value={isDarkMode}>
					<Nav
						darkModeHandler={darkModeHandler}
						isDarkMode={isDarkMode}
						listViewHandler={listViewHandler}
						isListView={isListView}
					/>
					<main className='container'>
						<AddNote />
						<NotesList isListView={isListView} />
					</main>
				</ThemeContext.Provider>
			</CssBaseline>
		</ThemeProvider>
	);
}

export default App;
