    import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
    import axios from 'axios';
    import { alertError, alertSuccess } from "../utilities/feedBack";

    export const requestLogin = createAsyncThunk(
        'user/requestLogin',
        async ({ email, password }, { rejectWithValue }) => {
            try {
                


                const res = await axios.post(`http://localhost:1111/authen/login`, { email, password });
            

            

                console.log('loged in')
                return res.data;
                navigate('/courrier');
            
            } catch (error) {
                return rejectWithValue(error.response ? error.response.data.message : error.message);
            }
        }
    );

    export const requestRegistre = createAsyncThunk(
        'user/requestRegistre',
        async({firstName, lastName, address, phoneNumber, role, establishment, email, password}, {rejectWithValue})=> {
            try{
            
                const res  = await axios.post(`http://localhost:1111/authen/registre`, {
                    firstName, 
                    lastName,
                    address, 
                    phoneNumber, 
                    role, 
                    establishment, 
                    email, 
                    password
                    });
                    alert('Registred Successfully');
                return res.data ;

            }catch{
                return rejectWithValue(error.response ? error.response.data.message : error.message);

            }
        }
    )

    export const requestUpdatePass = createAsyncThunk(
        'user/requestUpdatePass',
        async({oldPassword, newPassword}, {rejectWithValue}) => {

            try{

            const token = localStorage.getItem('token');
            

            const res = await axios.put(`http://localhost:1111/user`,
                {oldPassword, newPassword},
                {
                    headers: {
                        Authorization : `Bearer ${token}`
                    }
                }

            );
            console.log('Password update response:', res.data);
            return res.data;

            }catch(error){

            
                return rejectWithValue(error.response ? error.response.data.message : error.message);

            }

        }   
        
    )
    export const requestUpdateProfil = createAsyncThunk(
        'user/requestUpdateProfil',
        async({newFirstName, newLastName, newAddress, newPhoneNumber, newRole, newEstablishment, newEmail}, {rejectWithValue})=>{
            try{
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('No token found');
                }

                const res = await axios.put(
                    'http://localhost:1111/user/update',
                    {newFirstName, newLastName, newAddress, newPhoneNumber, newRole, newEstablishment, newEmail},
                    {headers : {
                            Authorization: `Bearer ${token}`
                            }
                    }
                )
                console.log('success')
                return res.data;
            }catch(error){
                console.log('Error response:', error.response);
                return rejectWithValue(error.response ? error.response.data.message : error.message);
            }
        }
    )
    export const requestConsultProfil = createAsyncThunk(
        'user/requestConsultProfil',
        async(_,{rejectWithValue})=>{
            try{
                const token = localStorage.getItem('token');
                if(!token){
                    throw new Error('No token provided'); 
                }
                const res = await axios.get('http://localhost:1111/user/profil', {
                    headers : {
                        Authorization : `Bearer ${token}`
                    }
                });
                return res.data;
            }catch(error){
                console.log('Error response:', error.response);
                return rejectWithValue(error.response ? error.response.data.message : error.message);
            }
        }
    )

    export const userSlice = createSlice({
        name: 'user',
        initialState: {
            isAuthenticated: false,
            token: null,
            details: null,
            isLoading: false,
            error: null
        },
        reducers: {
            login: (state, action) => {
                state.isAuthenticated = true;
                state.token = action.payload.token;
                state.details = action.payload.details;
                localStorage.setItem('token', action.payload.token);
                localStorage.setItem('userDetails', JSON.stringify(action.payload.details));
            },
            logout: (state) => {
                state.isAuthenticated = false;
                state.token = null;
                state.details = null;
                localStorage.removeItem('token');
                localStorage.removeItem('userDetails');
            }
        },
        extraReducers: (builder) => {
            builder
                .addCase(requestLogin.pending, (state) => {
                    state.isLoading = true;
                    state.error = null;
                })
                .addCase(requestLogin.fulfilled, (state, action) => {
                    state.isAuthenticated = true;
                    const token = action.payload.token;
                    const userDetails = action.payload.details;

                    localStorage.setItem('token', token);
                    localStorage.setItem('userDetails', JSON.stringify(userDetails));
                    console.log('accepted login');

                
                })
                .addCase(requestLogin.rejected, (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload;
                    console.log('rejected login')
                })
                .addCase(requestRegistre.pending, (state)=>{
                    state.isLoading=true;
                
                })
                .addCase(requestRegistre.fulfilled, (state, action)=> {
                    state.isLoading = false;
                    console.log(action.payload.message);
                    console.log('accepted Registre')

                
                })
                .addCase(requestRegistre.rejected, (state, action)=>{
                    state.isLoading = false;
                    state.error = action.payload;
                    console.log('rejected Registre');
                    
                })
                .addCase(requestUpdatePass.pending, (state)=> {
                    state.isLoading = true;
                })
                .addCase(requestUpdatePass.rejected, (state, action)=> {
                    state.isLoading= false;
                    state.error = action.payload;
                    alertError(action.payload);
                    
                })
                .addCase(requestUpdatePass.fulfilled, (state, action)=>{
                    state.isLoading = false;
                    alertSuccess('Password updated successfully');
                    console.log(action.payload.message);
                })
                .addCase(requestUpdateProfil.pending, (state)=> {
                    state.isLoading = true;
                    state.error = false;
                })
                .addCase(requestUpdateProfil.rejected, (state, action)=> {
                    state.isLoading= false;
                    state.error = true;
                    alertError(action.payload);
                })
                .addCase(requestUpdateProfil.fulfilled, (state, action)=> {
                    state.isLoading = false;
                    alertSuccess('Profil updated successfully');
                })
                .addCase(requestConsultProfil.pending, (state)=> {

                    state.error = null;
                    state.isLoading= true;
                })
                .addCase(requestConsultProfil.rejected, (state, action)=> {
                    state.isLoading= false;
                    state.error = action.payload;
                    alertError(action.payload);
                })
                .addCase(requestConsultProfil.fulfilled, (state, action)=>{
                    state.isLoading = false;
                    state.details= action.payload;
                })
        }
    });

    export const { login, logout } = userSlice.actions;
    export default userSlice.reducer;
