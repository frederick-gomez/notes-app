import React, { useState } from 'react';
import SignIn from '../Auth/SignIn';
import Register from '../Auth/Register';

const AuthPage = () => {
	const [createAccountForm, setCreateAccountForm] = useState(false);
	const switchFormHandler = () => setCreateAccountForm(!createAccountForm);

	return (
		<>
			{!createAccountForm && <SignIn switchForm={switchFormHandler} />}
			{createAccountForm && <Register switchForm={switchFormHandler} />}
		</>
	);
};

export default AuthPage;
