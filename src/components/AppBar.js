import { AppNav } from "./AuthNav/AppNav"
import { Navigation } from "./Auth/Navigation/Navigation"
import { UserMenu } from "./Auth/UserMenu/UserMenu"
import { useSelector } from "react-redux"
import { selectIsLogged } from "../redux/selectors" 

export const AppBar= ()=>{
  const isLoggedIn = useSelector(selectIsLogged)
return(
   
  <header>
    <Navigation/>
    {isLoggedIn ? <UserMenu/> : <AppNav/>}
     
   
 
  </header>
    )
}  