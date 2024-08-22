import { Layout } from "components/Tasks/Layout/Layout";
import { AppBar } from "components/Tasks/AppBar/AppBar";
import { TaskForm } from "components/Tasks/TaskForm/TaskForm";
import { TaskList } from "components/Tasks/TaskList/TaskList";
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { getTasks } from "../redux/operations";

export const App = () => {
const dispatch = useDispatch()

useEffect(() => {
dispatch(getTasks())
}, [dispatch])
return (
<Layout>
<AppBar />
{/* <TaskForm />
<TaskList /> */}
</Layout>
);
};