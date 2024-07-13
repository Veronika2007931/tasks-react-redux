import {createSlice} from "@reduxjs/toolkit"

const initialTaskstate = [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ]

 export const taskSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reduser:{
        addTask(state, action){
            state.push(action.payload)
        },
        deletetask(state, action){
            return state.filter(task=> task.id !== action.payload)
        },
        toggleTask(state, action){
            return  state.tasks.map(task => { 
                if (task.id === action.payload) {
                return {
                ...task,
                completed: !task.completed,
                };
                }
        })
        }}
          

    
  })


  export const {addTask} = taskSlice.action
  export const taskReduser = taskSlice.reduser