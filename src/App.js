import React, { useState, useEffect } from 'react';
import './App.css';
import ThemeProviderCtx from './components/Context/ThemeContext';
import { NoteViewProvider } from './components/Context/NoteViewContext';
import { Routes, Route } from 'react-router-dom';

//Components
import Nav from './components/Nav/Nav';
import NotesList from './components/Pages/NotesList';
import ArchiveNotes from './components/Pages/ArchiveNotes';
import Home from './components/Pages/Home';
import SignIn from './components/Auth/SignIn';
import Register from './components/Auth/Register';
import RequiredLogin from './components/Pages/RequiredLogin';

//Material UI
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

// TODO: style reset password modal
// TODO: Implement tags feature
// TODO: Fix edit form in mobile view
// TODO: Unsuscribe all listeners in logout

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
								<Route path='/login' element={<SignIn />} />
								<Route path='/register' element={<Register />} />
								<Route element={<RequiredLogin />}>
									<Route path='/notes' element={<NotesList />} />
									<Route path='/archive' element={<ArchiveNotes />} />
								</Route>
							</Routes>
						</Container>
					</NoteViewProvider>
				</ThemeProviderCtx>
			</CssBaseline>
		</ThemeProvider>
	);
}

export default App;
