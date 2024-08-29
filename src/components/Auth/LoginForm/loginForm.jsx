import { UseDispatch } from "react-redux";
import {logIn} from ''

export const LoginForm = ()=>{
const dispatch = useDispatch();

const handleSubmit = e => {
e.preventDefault();
const form = e.currentTarget;

form.reset();
}


return (
     <form onSubmit={handleSubmit} autoComplete="off">
    < label >
    Email
    <input type="email" name="email" />
    </label> 
    < label >
    Password
    <input type="password" name="password" />
    </label>
    < button type="submit">Log In</button>
    </form>
    )}