import { createContext, useState } from 'react';

const NoteViewContext = createContext({
	isListView: false,
	toggleView: () => {},
});

const NoteViewProvider = ({ children }) => {
	const [isListView, setIsListView] = useState(false);

	const toggleViewHandler = () => setIsListView(!isListView);

	const viewContext = {
		isListView,
		toggleView: toggleViewHandler,
	};

	return <NoteViewContext.Provider value={viewContext}>{children}</NoteViewContext.Provider>;
};

export { NoteViewProvider };
export default NoteViewContext;
