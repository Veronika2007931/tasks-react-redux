import { Layout } from "components/Layout";
import { AppBar } from "components/AppBar";
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { getTasks } from "../redux/operations";
import {HomePage} from "../pages/HomePage"

export const App = () => {
const dispatch = useDispatch()

useEffect(() => {
dispatch(getTasks())
}, [dispatch])
return (
<Layout>
<AppBar />
<Routes>
    <Rote path="/" element={<HomePage/>}/>
    <Rote path="/registration" element={<HomePage/>}/>
    <Rote path="/login" element={<HomePage/>}/>
    <Rote path="/tasks" element={<HomePage/>}/>
</Routes>
{/* <TaskForm />
<TaskList /> */}
</Layout>
);
};