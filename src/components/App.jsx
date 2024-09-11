import { Layout } from "components/Layout";
import { AppBar } from "components/AppBar";
import HomePage from "../pages/HomePage/homePage"
import { LoginPage } from "pages/LoginPage/loginPage";
import { RegisterPage } from "pages/RegPage/regPage";
import { TasksPage } from "pages/TaskPage/taskPage";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";


export const App = () => {

return (
<Layout>
<AppBar />
<Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/registration" element={<RegisterPage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/tasks" element={<PrivateRoute redirectTo= "/" component = {<TasksPage/>}/>}/>
</Routes>
</Layout>
);
};