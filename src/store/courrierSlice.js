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
export const requestSearchByDate = createAsyncThunk(
'courrier/requestSearchByDate',
async(date, {rejectWithValue})=> {
    try{
        const token = localStorage.getItem('token');
        if(!token){
            throw new Error('no token provided');
        }
        const res = await axios.get(`http://localhost:1111/user/tsearch/${encodeURIComponent(date)}`,{
            headers : {
                Authorization : ` Bearer ${token}`
            }
        });
        console.log(res.data)
        return res.data
    }catch(error){
        return rejectWithValue(error.response ? error.response.data.message : error.message);

    }
});


export const requestNameSearch = createAsyncThunk(
  'courrier/requestNameSearch',
  async (name, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error('No token provided');
      }

      const res = await axios.get(`http://localhost:1111/user/SBN/${encodeURIComponent(name)}`, {
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

export const requestTreatCourrier = createAsyncThunk(
    'courrier/http://localhost:1111/user/treat',
    async({courrierID , answer}, {rejectWithValue})=>{
    try{

        const token = localStorage.getItem('token');
        if(!token){
            throw new Error("no Token provided"); 
        }
        console.log(token)
        const res = await axios.post(`http://localhost:1111/user/treat`,
            {courrierID, answer},
            {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }
        );
        return res.data;
    }catch(error){
        return rejectWithValue(error.response ? error.response.data.message : error.message);
    }
    }
)


export const requestAllCourrier = createAsyncThunk(
    'courrier/requestAllCourrier',
    async(_,{rejectWithValue})=>{
        try{
                const token = localStorage.getItem('token');

                if(!token){
                    throw new Error("no Token provided"); 
                }
                console.log(token)

                const res = await axios.get(`http://localhost:1111/user/all`, 
                    {
                        headers : {
                            Authorization : `bearer ${token}`
                        }
                    }

                );
                return res.data;
        }catch(error){
            return rejectWithValue(error.response ? error.response.data.message : error.message);

        }
    }
)

export const requestCourrierTraceability = createAsyncThunk(
    'user/requestCourrierTraceability',
    async(_,{rejectWithValue}) => {
        try{
            const token = localStorage.getItem('token')
        const res = await axios.get('http://localhost:1111/user/trac', {
            headers : {
                Authorization : `Bearer ${token}`
            }
        });
            return res.data;
        }catch(error){
            console.log('Error response' , error.message)
            return rejectWithValue(error.response ? error.response.data.message : error.message);

        }
        
    }
)


export const courrierSlice = createSlice({
    name: 'courrier',
    initialState: {
        isLoading: false,
        error: null,
        ResCourriers: []
    },
    reducers: {
        clearCourriers: (state) => {
            state.ResCourriers = [];
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(requestConsultCourrier.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(requestConsultCourrier.fulfilled, (state, action) => {
                
                console.log("Payload from request consult :", action.payload); 
                state.isLoading = false; 
                state.error = null;
                state.ResCourriers = action.payload.Courriers;
                console.log('state.ResCourriers');

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
              state.ResCourriers = action.payload.Courriers;
              console.log('Consultation successful');
              console.log(action.payload);

              state.isLoading = false;
              state.error = null;
          })
          .addCase(requestSearchByDate.pending, (state)=> {
            state.isLoading = true;
            state.error = null;

          })
          .addCase(requestSearchByDate.rejected, (state, action)=> {
            state.isLoading = false;
            state.error = action.payload;
          })
          .addCase(requestSearchByDate.fulfilled, (state, action)=> {
            state.error = null;
            state.isLoading = false;
            state.ResCourriers = action.payload.Courriers;
          } )
          .addCase(requestTreatCourrier.pending, (state)=> {
            state.error = null;
            state.isLoading = true;
          })
          .addCase(requestTreatCourrier.rejected, (state, action)=> {
            state.isLoading = false;
            state.error = action.payload ;
          })
          .addCase(requestTreatCourrier.fulfilled, (state, action)=> {
            state.ResCourriers= action.payload.courrier;
            state.error = null;
            state.isLoading = false;
          })
          .addCase(requestAllCourrier.rejected, (state, action)=> {
            state.isLoading = false;
            state.error = action.payload;
          })
          .addCase(requestAllCourrier.pending, (state)=> {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(requestAllCourrier.fulfilled, (state, action)=> {
            state.ResCourriers = action.payload.courriers;
            state.isLoading = false;
            state.error = null;
          })
          .addCase(requestCourrierTraceability.pending , (state)=>{
            state.isLoading = true;
            state.error = null;
          })
          .addCase(requestCourrierTraceability.rejected, (state, action)=> {
            state.isLoading = false;
            state.error = action.payload;
          })
          .addCase(requestCourrierTraceability.fulfilled, (state, action)=> {
            state.ResCourriers = action.payload.TracCourriers;
            state.isLoading = false;
            state.error = null;
          })
          
          

          
            
    
    }
});

export const { clearCourriers } = courrierSlice.actions;

export default courrierSlice.reducer;
