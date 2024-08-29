import { Navlink } from "react-router-dom"

export const Navigation = ()=>{
return(
    <div>
        <nav>
      <Navlink to="/"> Home </Navlink>
      <Navlink to="/tasks"> Tasks </Navlink>
      </nav>
    </div>
)
}