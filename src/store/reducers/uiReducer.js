import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isListView: false,
	isFiledNotes: false,
};

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		toggleListView(state) {
			state.isListView = !state.isListView;
		},
		viewFiledNotes(state) {
			state.isFiledNotes = true;
		},
		viewNotes(state) {
			state.isFiledNotes = false;
		},
	},
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
