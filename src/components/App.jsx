import { Layout } from "components/Layout";
import { AppBar } from "components/AppBar";
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { getTasks } from "../redux/operations";
import {HomePage} from "../pages/HomePage"
import { LoginPage } from "pages/LoginPage/loginPage";
import { RegisterPage } from "pages/RegPage/regPage";
import { TasksPage } from "pages/TaskPage/taskPage";

export const App = () => {

return (
<Layout>
<AppBar />
<Routes>
    <Rote path="/" element={<HomePage/>}/>
    <Rote path="/registration" element={<RegisterPage/>}/>
    <Rote path="/login" element={<LoginPage/>}/>
    <Rote path="/tasks" element={<TasksPage/>}/>
</Routes>
{/* <TaskForm />
<TaskList /> */}
</Layout>
);
};