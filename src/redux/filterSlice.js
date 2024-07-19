import {createSlice} from "@reduxjs/toolkit"



export const filterSlice = createSlice({
    name: 'filters',
    initialState: {status: "all"},
    reducers: {
    setStatusFilters(state, action){
    state.status = action.payload
    }
    }
    })
    
    
    export const { setStatusFilters } = filterSlice.actions
    export const filtersReducer = filterSlice.reducer