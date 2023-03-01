import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    bps: [],
    error: '',
};

export const fetchBps = createAsyncThunk('bps/fetchBps', () => {
    return axios
        .get('http://localhost:4000/api/bps/')
        .then((response) => response.data);
});

export const bpSlice = createSlice({
    name: 'bp',
    initialState,
    reducers: {
        resetBps: (state) => {
            state.bps = [];
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

export const { resetBps } = bpSlice.actions;

export default bpSlice.reducer;
