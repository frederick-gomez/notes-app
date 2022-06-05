import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

//Components
import Layout from './components/Pages/Layout';
import NotesList from './components/Pages/NotesList';
import ArchiveNotes from './components/Pages/ArchiveNotes';
import Home from './components/Pages/Home';
import SignIn from './components/Auth/SignIn';
import Register from './components/Auth/Register';
import RequiredLogin from './components/Pages/RequiredLogin';

//Material UI
import Container from '@mui/material/Container';

// TODO: style reset password modal
// TODO: Implement tags feature
// TODO: Unsuscribe all listeners in logout

function App() {
	return (
		<Layout>
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
		</Layout>
	);
}

export default App;
