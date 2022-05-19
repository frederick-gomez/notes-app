import { createContext, useState } from 'react';

const NoteViewContext = createContext(false);
const NoteViewDispatchContext = createContext();

const NoteViewProvider = ({ children }) => {
	const [isListView, setIsListView] = useState(false);

	return (
		<NoteViewContext.Provider value={isListView}>
			<NoteViewDispatchContext.Provider value={setIsListView}>
				{children}
			</NoteViewDispatchContext.Provider>
		</NoteViewContext.Provider>
	);
};

export { NoteViewProvider, NoteViewContext, NoteViewDispatchContext };
