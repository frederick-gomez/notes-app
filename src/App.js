import Nav from './components/Nav/Nav';
import NotesList from './components/Notes/NotesList';

//Material UI
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';

function App() {
	const theme = createTheme({
		palette: {
			primary: {
				main: '#ffc121',
			},
			secondary: {
				main: '#ccff90',
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<Nav />
			<NotesList />
		</ThemeProvider>
	);
}

export default App;
