import { configureStore } from '@reduxjs/toolkit';
import { taskReducer } from './taskSlice';
import { filtersReducer } from './filterSlice';
import { authReduser } from './authSlice';


export const store = configureStore({
reducer: {
tasks: taskReducer,
filters: filtersReducer,
auth: authReduser
},

})