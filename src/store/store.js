import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './reducers/uiReducer';

const store = configureStore({
	reducer: { ui: uiSlice },
});

export default store;
