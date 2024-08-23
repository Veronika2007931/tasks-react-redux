import { AppNav } from "./AuthNav/AppNav"
import { Navigation } from "./Auth/Navigation/Navigation"
import { UserMenu } from "./Auth/UserMenu/UserMenu"

export const AppBar= ()=>{
    return(
  <header>
    <Navigation/>
     <UserMenu/>
     <AppNav/>
 
  </header>
    )
}  