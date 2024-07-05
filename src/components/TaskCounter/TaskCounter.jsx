import css from "./TaskCounter.module.css";
import {useSelector } from "react-redux"
import {getTasks} from "redux/selectors"

export const TaskCounter = () => {
const tasks = useSelector(getTasks)
const taskCounter = tasks.reduse((acc, task) => {
    if(task.completed) {
        acc.completed += 1
    }else {
        acc.active += 1
    }
    
    return acc},{active: 0, compailed: 0})

  return (
    <div>
      <p className={css.text}>Active: {taskCounter.active}</p>
      <p className={css.text}>Completed: {taskCounter.completed}</p>
    </div>
  );
};