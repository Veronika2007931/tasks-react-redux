import { NavLink } from "react-router-dom"

export const Navigation = ()=>{
return(
    <div>
        <nav>
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/tasks"> Tasks </NavLink>
      </nav>
    </div>
)
}