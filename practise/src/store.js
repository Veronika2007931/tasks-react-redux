import { createSlice } from '@reduxjs/toolkit'
import { devToolsEnhancer } from '@reduxjs/toolkit/dist/devtoolsExtension'
import { legacy_createStore as createStore} from 'redux'


// const initialState = {
//     value: 5
// }

// export const incrementCounter = (value) => {
//     return{
//         type: 'counter/increment',
//         payload: value

//     }
// }

// const rootReducer =(state = initialState, action)=>{
//     switch(action.payload){
//         case 'caunter/increment':
//         return{
//             ...state,
//             value: state.value + action.payload
//         }
//         default:
//             return state
//     }

// }

// ось це замість того що вище 
// Slice сам створює ection

const counterSlice = createSlice({
    name: 'counter',
    initialState:{value:5},
    reducers:{
        increment(state, action){
            return{
                ...state,
                value: state.value + action.payload
            }
        }
    }
})

const enhancer = devToolsEnhancer()
export const store = createStore(rootReducer)