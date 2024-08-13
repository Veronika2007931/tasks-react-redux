import { Task } from "components/Task/Task";
import {useSelector} from "react-redux"
import css from "./TaskList.module.css";
import {selectVisibleTasks} from "../../redux/selectors"



  export const TaskList = () => {

  
  const visibleTasks = useSelector(selectVisibleTasks)
  // const visibleTasks = getVisibleTasks(tasks, statusFilter);
  
  return (
  <ul className={css.list}>
  {visibleTasks.map(task => {
  console.log(task)
  return <li className={css.listItem} key={task.id}>
  <Task task={task} />
  </li>
  })}
  </ul>
  );
  };