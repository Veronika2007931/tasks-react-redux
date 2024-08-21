import css from "./TaskCounter.module.css";
import {useSelector } from "react-redux"
import {selectTaskCounter} from "../../redux/selectors"


export const TaskCounter = () => {

  const taskCounter = useSelector(selectTaskCounter)

  return (
    <div>
      <p className={css.text}>Active: {taskCounter.active}</p>
      <p className={css.text}>Completed: {taskCounter.completed}</p>
    </div>
  );
};
