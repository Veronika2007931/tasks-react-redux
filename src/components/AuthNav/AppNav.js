import { NavLink } from "react-router-dom"
export const AppNav= ()=>{
  return(
    <div>
       <NavLink to="/registration"> Registration </NavLink>
      <NavLink to="/login"> Login </NavLink>
    </div>
  )
}