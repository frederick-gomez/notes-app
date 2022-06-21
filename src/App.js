import React, { useContext } from 'react';
import './App.css';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import AuthContext from './components/Context/AuthContext';
import { AnimatePresence } from 'framer-motion';

//Components
import Layout from './components/Pages/Layout';
import NotesList from './components/Pages/NotesList';
import ArchiveNotes from './components/Pages/ArchiveNotes';
import Home from './components/Pages/Home';
import SignIn from './components/Auth/SignIn';
import Register from './components/Auth/Register';

//Material UI
import Container from '@mui/material/Container';

function App() {
	const authCtx = useContext(AuthContext);
	const isLoggedIn = authCtx.isLoggedIn;
	const location = useLocation();

	return (
		<Layout>
			<Container maxWidth='xl' component='main' sx={{ marginBottom: 2 }}>
				<AnimatePresence exitBeforeEnter>
					<Routes key={location.pathname} location={location}>
						<Route path='/' element={<Home />} />
						{!isLoggedIn && <Route path='/login' element={<SignIn />} />}
						{!isLoggedIn && <Route path='/register' element={<Register />} />}
						{isLoggedIn && <Route path='/notes' element={<NotesList />} />}
						{isLoggedIn && <Route path='/archive' element={<ArchiveNotes />} />}
						<Route path='*' element={<Navigate to='/' />} />
					</Routes>
				</AnimatePresence>
			</Container>
		</Layout>
	);
}

export default App;
