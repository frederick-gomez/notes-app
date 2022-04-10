import Nav from './components/Nav/Nav';
import NotesList from './components/Notes/NotesList';
import AddNote from './components/Notes/AddNote';

//Material UI
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';

//To-Do List
//Fix interaction in NoteCard for the visibility of the action buttons

function App() {
	const theme = createTheme({
		// palette: {
		// 	primary: {
		// 		main: '#ffc121',
		// 	},
		// 	secondary: {
		// 		main: '#ccff90',
		// 	},
		// },
	});

	return (
		<ThemeProvider theme={theme}>
			<Nav />
			<AddNote />
			<NotesList />
		</ThemeProvider>
	);
}

export default App;
