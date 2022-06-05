import React, { useState, useEffect } from 'react';
import ThemeProviderCtx from '../Context/ThemeContext';
import { NoteViewProvider } from '../Context/NoteViewContext';
import Nav from '../Nav/Nav';

//Material UI
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import CssBaseline from '@mui/material/CssBaseline';

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

const Layout = ({ children }) => {
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
						{children}
					</NoteViewProvider>
				</ThemeProviderCtx>
			</CssBaseline>
		</ThemeProvider>
	);
};

export default Layout;
