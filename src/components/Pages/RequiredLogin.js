import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

const RequiredLogin = () => {
	const [user] = useAuthState(auth);

	if (!user) {
		return <Navigate to='/login' replace />;
	} else {
		return <Outlet />;
	}
};

export default RequiredLogin;
