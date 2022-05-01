import { createContext } from 'react';

const ThemeContext = createContext(false);

const ThemeProviderCtx = ({ children, value }) => {
	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};

export default ThemeProviderCtx;
