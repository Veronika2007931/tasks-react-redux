import { AppNav } from "./AuthNav/AppNav"
import { Navigation } from "./Navigation/Navigation"
import { UserMenu } from "./UserMenu/UserMenu"

export const AppBar= ()=>{
    return(
  <header>
    <Navigation/>
     <UserMenu/>
     <AppNav/>
 
  </header>
    )
}  