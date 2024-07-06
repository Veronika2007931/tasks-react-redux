import {legacy_createStore as createStore} from "redux" 
// import { devToolsEnhancer } from "@redux-devtools/extension";


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
        case "tasks/addTask":
            return{
                ...state,
                tasks:[...state.tasks, action.payload]
            }
        case "tasks/deleteTask":
            return{
                ...state,
                tasks: state.tasks.filter(item => item.id !== action.payload)
            }
        case "tasks/toggleComplete" :
           
            return {
                ...state,
                tasks: state.tasks.map(task => {
                if (task.id === action.payload) {
                return {
                ...task,
                completed: !task.completed,
                };
                }
                return task;
                }),
                }
        case "filters/changeFilters":
            return{
                ...state,
                 filters: {...state.filters, status: action.payload }
            }          
          
    
        default:
            return state;
    }


   };
//    const enhancer = devToolsEnhancer();
   export const store = createStore(rootReducer)