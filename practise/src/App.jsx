import {useSelector,useDispatch} from "react-redux"
import { incrementCounter } from "store"

export const App=()=>{

const counterValue = useSelector((state)=>{return state.value})
const dispatch = useDispatch()

const handleIncrement=()=>{
    dispatch(incrementCounter(1))
}

    return(
        <>
        <h1>Counter</h1>
        <p>Значення counter: {counterValue}</p>
        <button type="button" onClick={handleIncrement}>Збільшити </button>
        </>

    )
}