 
import { configureStore, Tuple } from '@reduxjs/toolkit'
import { filtersReduser } from './filterSlice';
import { taskReduser } from './taskSlice';




   
  export const store = configureStore({
    reducer: {
        task: taskReduser,
        filters: filtersReduser
    },
  
  })
//    const enhancer = devToolsEnhancer();
//    export const store = createStore(rootReducer)