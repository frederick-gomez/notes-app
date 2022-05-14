import React, { useState, useEffect } from 'react';
import './App.css';
import ThemeProviderCtx from './components/Context/ThemeContext';

//Auth
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

//Components
import Nav from './components/Nav/Nav';
import NotesList from './components/Notes/NotesList';
import AddNote from './components/Notes/AddNote/AddNote';
import SignIn from './components/Auth/SignIn';
import Register from './components/Auth/Register';

//Material UI
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import CssBaseline from '@mui/material/CssBaseline';

// TODO: Fix interaction in NoteCard for the visibility of the action buttons
// TODO: style reset password modal
// TODO: Update notes colors on theme change
// TODO: Implement tags feature
// TODO: Fix edit form in mobile view
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
	const [isListView, setIsListView] = useState(false);
	const [createAccountForm, setCreateAccountForm] = useState(false);

	const listViewHandler = () => setIsListView(!isListView);
	const darkModeHandler = () => setIsDarkMode(!isDarkMode);
	const switchFormHandler = () => setCreateAccountForm(!createAccountForm);

	const [user, loading] = useAuthState(auth);

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
			let prefersDarkMode = window.matchMedia(
				'(prefers-color-scheme: dark)'
			).matches;
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
					<Nav
						darkModeHandler={darkModeHandler}
						isDarkMode={isDarkMode}
						listViewHandler={listViewHandler}
						isListView={isListView}
					/>
					<main className='container'>
						{!user && !createAccountForm && !loading && (
							<SignIn switchForm={switchFormHandler} />
						)}
						{!user && createAccountForm && (
							<Register switchForm={switchFormHandler} />
						)}
						{user && !loading && (
							<>
								<AddNote />
								<NotesList isListView={isListView} />
							</>
						)}
					</main>
				</ThemeProviderCtx>
			</CssBaseline>
		</ThemeProvider>
	);
}

export default App;
