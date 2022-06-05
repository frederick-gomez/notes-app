import { createContext, useState } from 'react';

const NoteViewContext = createContext({
	isListView: false,
	toggleView: () => {},
});
// const NoteViewDispatchContext = createContext();

const NoteViewProvider = ({ children }) => {
	const [isListView, setIsListView] = useState(false);

	const toggleViewHandler = () => setIsListView(!isListView);

	const viewContext = {
		isListView,
		toggleView: toggleViewHandler,
	};

	return (
		<NoteViewContext.Provider value={viewContext}>
			{/* <NoteViewDispatchContext.Provider value={setIsListView}> */}
			{children}
			{/* </NoteViewDispatchContext.Provider> */}
		</NoteViewContext.Provider>
	);
};

export { NoteViewProvider };
export default NoteViewContext;
