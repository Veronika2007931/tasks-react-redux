import {useDispatch} from "react-redux"
import { Button } from "components/Tasks/Button/Button";
import css from "./TaskForm.module.css";
import { addTask } from "../../../redux/operations";


export const TaskForm = () => {

const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    // тут записано те на якому елементі відбувається дія .target

    // dispatch(addTask(
    //       form.elements.text.value,
    //     ))

    form.reset();
    // а тут ми скидуємо форму
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
