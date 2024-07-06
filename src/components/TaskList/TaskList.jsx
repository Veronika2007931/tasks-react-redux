import { Task } from "components/Task/Task";
import {useSelector} from "react-redux"
import css from "./TaskList.module.css";
import {getTasks} from "../../redux/selectors"
import { statusFilters } from "../../redux/constants";


const getVisibleTasks = (tasks, statusFilter)=>{
  switch(statusFilter){
    case statusFilters.active:
      return tasks.filter(task => !task.completed);

    case statusFilters.completed:
      return tasks.filter(task => task.completed);
      
    default: 
    return tasks;  
  }
}

export const TaskList = () => {
    const tasks = useSelector(getTasks)
    const statusFilter = useSelector(state => state.filters.status);
    const visibleTasks = getVisibleTasks(tasks, statusFilter);
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
