import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; 
import courrierSlice from './courrierSlice';

const Store = configureStore({
    reducer: {
        user: userReducer, 
        courriers : courrierSlice
    }   
});

export default Store;