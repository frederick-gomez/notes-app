import React, { useContext, useEffect } from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthContext from './components/Context/AuthContext';

//Components
import Layout from './components/Pages/Layout';
import NotesList from './components/Pages/NotesList';
import ArchiveNotes from './components/Pages/ArchiveNotes';
import Home from './components/Pages/Home';
import SignIn from './components/Auth/SignIn';
import Register from './components/Auth/Register';

//Material UI
import Container from '@mui/material/Container';

// TODO: style reset password modal
// TODO: Implement tags feature
// TODO: Unsuscribe all listeners in logout

function App() {
	const authCtx = useContext(AuthContext);
	const isLoggedIn = authCtx.isLoggedIn;

	return (
		<Layout>
			<Container maxWidth='xl' component='main'>
				<Routes>
					<Route path='/' element={<Home />} />
					{!isLoggedIn && <Route path='/login' element={<SignIn />} />}
					{!isLoggedIn && <Route path='/register' element={<Register />} />}
					{isLoggedIn && <Route path='/notes' element={<NotesList />} />}
					{isLoggedIn && <Route path='/archive' element={<ArchiveNotes />} />}
					<Route path='*' element={<Navigate to='/' />} />
				</Routes>
			</Container>
		</Layout>
	);
}

export default App;
