import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const requestConsultCourrier = createAsyncThunk(
    'courrier/requestConsultCourrier',
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                throw new Error('No token provided');
            }

            const res = await axios.get('http://localhost:1111/user', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            return res.data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data.message : error.message);
        }
    }
);

export const courrierSlice = createSlice({
    name: 'courrier',
    initialState: {
        isLoading: false,
        error: null,
        courriers: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(requestConsultCourrier.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(requestConsultCourrier.fulfilled, (state, action) => {
                state.isLoading = false;
                
                state.courriers = action.payload.Courriers;
                console.log('Consultation successful');
            })
            .addCase(requestConsultCourrier.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                console.log('Consultation failed');
            });
    }
});

export default courrierSlice.reducer;
