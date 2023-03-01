import { configureStore } from '@reduxjs/toolkit';
import bpReducer from '../features/bp/bpSlice';

export const store = configureStore({
    reducer: {
        bps: bpReducer,
    },
});
