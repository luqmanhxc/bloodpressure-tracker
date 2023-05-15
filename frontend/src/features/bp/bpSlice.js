import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    bps: [],
    error: '',
};

export const fetchBps = createAsyncThunk('bps/fetchBps', () => {
    return axios
        .get('https://bloodpressure-tracker-api.onrender.com/api/bps/')
        .then((response) => response.data);
});

export const bpSlice = createSlice({
    name: 'bp',
    initialState,
    reducers: {
        resetBps: (state) => {
            state.bps = [];
        },
        addBp: (state, action) => {
            state.bps = [action.payload, ...state.bps];
        },
        removeBp: (state, action) => {
            state.bps = state.bps.filter((bp) => bp._id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBps.pending, (state) => {
            state.loading = true;
            state.bps = [];
        });
        builder.addCase(fetchBps.fulfilled, (state, action) => {
            state.loading = false;
            state.bps = action.payload;
            state.error = '';
        });
        builder.addCase(fetchBps.rejected, (state, action) => {
            state.loading = false;
            state.bps = [];
            state.error = action.error.message || 'Something went wrong';
        });
    },
});

export const { resetBps, addBp, removeBp } = bpSlice.actions;

export default bpSlice.reducer;
