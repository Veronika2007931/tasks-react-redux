import { Navlink } from "react-router-dom"
export const AppNav= ()=>{
  return(
    <div>
       <Navlink to="/registration"> Registration </Navlink>
      <Navlink to="/login"> Login </Navlink>
    </div>
  )
}