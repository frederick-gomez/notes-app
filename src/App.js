import React, { useState, useEffect } from 'react';
import './App.css';
import ThemeProviderCtx from './components/Context/ThemeContext';
import { NoteViewProvider } from './components/Context/NoteViewContext';
import { Routes, Route } from 'react-router-dom';

//Components
import Nav from './components/Nav/Nav';
import NotesList from './components/Pages/NotesList';
import FiledNotesList from './components/Pages/FiledNotesList';

//Material UI
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import CssBaseline from '@mui/material/CssBaseline';
import AuthPage from './components/Pages/AuthPage';
import Home from './components/Pages/Home';
import { Container } from '@mui/material';

// TODO: Fix interaction in NoteCard for the visibility of the action buttons
// TODO: style reset password modal
// TODO: Update notes colors on theme change
// TODO: Implement tags feature
// TODO: Fix edit form in mobile view
// TODO: Unsuscribe all listeners in logout
// ? Use objects for colors

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
	const darkModeHandler = () => setIsDarkMode(!isDarkMode);

	//Both useEffect manage the app dark/light mode on init
	useEffect(() => {
		const currentTheme = localStorage.getItem('theme');
		if (currentTheme) {
			if (currentTheme === 'dark') {
				setIsDarkMode(true);
			} else {
				setIsDarkMode(false);
			}
		} else {
			let prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
			if (prefersDarkMode) {
				setIsDarkMode(true);
			} else {
				setIsDarkMode(false);
			}
		}
	}, []);

	useEffect(() => {
		if (isDarkMode) {
			localStorage.setItem('theme', 'dark');
		} else {
			localStorage.setItem('theme', 'light');
		}
	}, [isDarkMode]);

	return (
		<ThemeProvider theme={isDarkMode ? createTheme(dark) : createTheme(light)}>
			<CssBaseline enableColorScheme>
				<ThemeProviderCtx value={isDarkMode}>
					<NoteViewProvider>
						<Nav darkModeHandler={darkModeHandler} isDarkMode={isDarkMode} />

						<Container maxWidth='xl' component='main'>
							<Routes>
								<Route path='/' element={<Home />} />
								<Route path='/auth' element={<AuthPage />} />
								<Route path='/notes' element={<NotesList />} />
								<Route path='/filednotes' element={<FiledNotesList />} />
							</Routes>
						</Container>
					</NoteViewProvider>
				</ThemeProviderCtx>
			</CssBaseline>
		</ThemeProvider>
	);
}

export default App;
