import { createContext, useState } from 'react';
import { logout } from '../../firebase';

const AuthContext = createContext({
	token: '',
	isLoggedIn: false,
	login: (token) => {},
	logout: () => {},
});

const AuthContextProvider = ({ children }) => {
	const initialToken = localStorage.getItem('token');

	const [token, setToken] = useState(initialToken);

	const useIsLoggedIn = !!token;

	const logoutHandler = () => {
		setToken(null);
		localStorage.removeItem('token');
		logout();
	};

	const loginHandler = (tokenId) => {
		setToken(tokenId);
		localStorage.setItem('token', tokenId);
	};

	const contextValue = {
		token,
		isLoggedIn: useIsLoggedIn,
		login: loginHandler,
		logout: logoutHandler,
	};

	return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export { AuthContextProvider };
export default AuthContext;
