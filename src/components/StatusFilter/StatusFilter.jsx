import { Button } from "components/Button/Button";
import css from "./StatusFilter.module.css";
import {useDispatch, useSelector} from "react-redux"
import {getFilters} from "../../redux/selectors"
import {setStatusFilters} from "../../redux/filterSlice"
import { statusFilters } from "../../redux/constants";

export const StatusFilter = () => {
  const dispatch = useDispatch() 
  const filter = useSelector(getFilters)

const handleFilterChange= (filter)=>{
  dispatch(setStatusFilters(filter))
}
  return (
    <div className={css.wrapper}>
      <Button selected={statusFilters.all === filter } 
      onClick={()=>  dispatch(setStatusFilters(statusFilters.all))}>All</Button>
      <Button selected={statusFilters.active === filter} 
      onClick={()=> dispatch(setStatusFilters(statusFilters.active))}>Active</Button>
      <Button selected={statusFilters.complete === filter} 
      onClick={()=> dispatch(setStatusFilters(statusFilters.completed))}>Completed</Button>
    </div>
  );
};
