import {useDispatch } from 'react-redux';
import { register } from '../../../redux/auth/operation'
4
export const RegisterForm = () =>{
const dispatch = useDispatch();

const handleSubmit=e=>{

e.preventDefault();
const form = e.currentTarget;
}

return (
    <form onSubmit={handleSubmit} autoComplete="off">
    <label>
    Username
    < input type="text" name="name" />
    </label>
    < label >
    Email
    < input type="email" name="email" />
    </label>
    < label>
    Password
    < input type="password" name="password" />
    </label>
    < button type="submit"> Register</button>
    </form>
    )


}