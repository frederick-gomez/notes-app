import React, { useState } from 'react';
import './App.css';
import ThemeProviderCtx from './components/Context/ThemeContext';

//Auth
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

//Components
import Nav from './components/Nav/Nav';
import NotesList from './components/Notes/NotesList';
import AddNote from './components/Notes/AddNote/AddNote';
import AccountForm from './components/Auth/AccountForm';

//Material UI
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import CssBaseline from '@mui/material/CssBaseline';

// TODO: Fix interaction in NoteCard for the visibility of the action buttons
// TODO: Update notes colors on theme change
// TODO: Implement tags feature
// TODO: Fix edit form in mobile view
// TODO: Populate UserModal
// ! Fix loading button on AccountForm
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

	const [user] = useAuthState(auth);

	const listViewHandler = () => setIsListView(!isListView);
	const darkModeHandler = () => setIsDarkMode(!isDarkMode);

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
						{!user && <AccountForm />}
						{user && (
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
