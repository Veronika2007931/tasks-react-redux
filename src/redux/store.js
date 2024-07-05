import {legacy_createStore as createStore} from "redux" 
import { devToolsEnhancer } from "@redux-devtools/extension";


const initialState = {
    tasks: [
      { id: 0, text: "Learn HTML and CSS", completed: true },
      { id: 1, text: "Get good at JavaScript", completed: true },
      { id: 2, text: "Master React", completed: false },
      { id: 3, text: "Discover Redux", completed: false },
      { id: 4, text: "Build amazing apps", completed: false },
    ],
    filters: {
      status: "all",
    },
   };

   const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "tasks/addtask":
            return{
                ...state,
                tasks:[...state.tasks, action.payload]
            }
        case "task/deleteTask":
            return{
                ...state,
                tasks: state.tasks.filter(item => item.id !== action.payload)
            }
        case "tasks/toggleComplete" :
            return{
                ...state,
                tasks:state.tasks.map(item => {
                    return item.id !== action.playload ? item : {...item, completed: !item.completed}
                })
            }       
          
    
        default:
            return state;
    }


   };
   const enhancer = devToolsEnhancer();
   export const store = createStore(rootReducer)