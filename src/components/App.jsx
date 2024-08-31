import { Layout } from "components/Layout";
import { AppBar } from "components/AppBar";
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { getTasks } from "../redux/operations";
import {HomePage} from "../pages/HomePage/homePage"
import { LoginPage } from "pages/LoginPage/loginPage";
import { RegisterPage } from "pages/RegPage/regPage";
import { TasksPage } from "pages/TaskPage/taskPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/homePage"


export const App = () => {

return (
<Layout>
<AppBar />
<Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/registration" element={<RegisterPage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/tasks" element={<TasksPage/>}/>
</Routes>
{/* <TaskForm />
<TaskList /> */}
</Layout>
);
};