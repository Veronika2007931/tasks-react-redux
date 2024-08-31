import {TaskForm} from '../../components/Tasks/TaskForm/TaskForm'
import {TaskList} from "../../components/Tasks/TaskList/TaskList"
import { useDispatch } from 'react-redux'
import { getTasks } from '../../redux/operations'
import { useEffect } from 'react'

export function TasksPage(){
    const dispatch = useDispatch()

useEffect(() => {
dispatch(getTasks())
}, [dispatch])
  return(
   <>
    <TaskForm/>
    <TaskList/>
    </>
  )
}