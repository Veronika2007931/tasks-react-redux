import { Button } from "components/Button/Button";
import css from "./StatusFilter.module.css";
import {useDispatch, useSelector} from "react-redux"
import {getFilters} from "../../redux/selectors"
import {statusFilters} from "../../redux/filterSlice"

export const StatusFilter = () => {
  const dispatch = useDispatch() 
  const filter = useSelector(getFilters)

const handleFilterChange= (filter)=>{
  dispatch(statusFilters(filter))
}
  return (
    <div className={css.wrapper}>
      <Button selected={statusFilters.all === filter } 
      onClick={()=> handleFilterChange(statusFilters.all)}>All</Button>
      <Button selected={statusFilters.active === filter} 
      onClick={()=> handleFilterChange(statusFilters.active)}>Active</Button>
      <Button selected={statusFilters.complete === filter} 
      onClick={()=> handleFilterChange(statusFilters.completed)}>Completed</Button>
    </div>
  );
};
