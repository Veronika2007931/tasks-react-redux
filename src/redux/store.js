 
import { configureStore } from '@reduxjs/toolkit'
import { filtersReducer } from './filterSlice';
import { taskReducer } from './taskSlice';




   
  export const store = configureStore({
    reducer: {
        tasks: taskReducer,
        filters: filtersReducer
    },
  
  })
//    const enhancer = devToolsEnhancer();
//    export const store = createStore(rootReducer)