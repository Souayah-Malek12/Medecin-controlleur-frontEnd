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

export const requestNameSearch = createAsyncThunk(
    'courrier/requestNameSearch',
    async ({ name }, { rejectWithValue }) => {
      try {
        const token = localStorage.getItem('token');
  
        if (!token) {
          throw new Error('No token provided');
        }
  
        const res = await axios.post(
          'http://localhost:1111/user/nsearch',
          { name }, // This is the request body
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
  
        // Validate the response structure
        const { success, Courriers } = res.data;
        if (typeof success !== 'boolean' || !Array.isArray(Courriers)) {
          throw new Error('Unexpected response structure');
        }
  
        return res.data; // Adjust this based on expected structure
      } catch (error) {
        console.error('Error in requestNameSearch:', error);
        return rejectWithValue(
          error.response ? error.response.data.message : error.message
        );
      }
    }
  );


export const courrierSlice = createSlice({
    name: 'courrier',
    initialState: {
        isLoading: false,
        error: null,
        ResCourriers: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(requestConsultCourrier.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(requestConsultCourrier.fulfilled, (state, action) => {
                
                console.log("Payload from request consult :", action.payload); // Debugging
                state.isLoading = false; 
                state.error = null;
                state.ResCourriers = action.payload.Courriers;
                console.log('Consultation successful');
            })
            .addCase(requestConsultCourrier.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                console.log('Consultation failed');
            })
            .addCase(requestNameSearch.rejected , (state, action)=> {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(requestNameSearch.pending, (state)=> {
                state.isLoading = true;
                state.error = false;
            })
           
            .addCase(requestNameSearch.fulfilled, (state, action) => {

                console.log("Payload from request consult:", action.payload); // Debugging
                state.isLoading = false;
                
                if (action.payload && action.payload.Courriers) {
                    state.ResCourriers = action.payload.Courriers;
                    console.log('Consultation successful');
                } else {
                    state.error = 'Unexpected response structure';
                    console.log('Unexpected response structure:', action.payload);
                }
            })
            
    
    }
});

export default courrierSlice.reducer;
