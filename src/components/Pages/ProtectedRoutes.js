import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoutes = () => {
	const [user] = useAuthState(auth);
	let location = useLocation();

	return user ? (
		<Outlet />
	) : (
		<Navigate to='/auth' replace state={{ from: location }} />
	);
};

export default ProtectedRoutes;
