import {createSlice} from "@reduxjs/toolkit"

const filterSlice = createSlice({
    name:"filters",
    initialState,
    redusers:{
       
        setStatusFilters(state, action){
            state.status = action.payload
        }
       
    }
})

export const {setStatusFilter} = filterSlice.actions
export const filtersReduser = filterSlice.reduser