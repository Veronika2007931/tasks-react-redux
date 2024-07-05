import {nanoid} from "nanoid"

export const addTask=(text)=>{
    return{

        type:'tasks/addTask',
        payload: {
            id: nanoid(),
             text: text,
              completed: false
        }
    //    те що відправляємо як дані для зміни стейт 
    }
}
export const deleteTask=(id)=>{
   return{ 
    type:"task/deleteTask",
    payload: id
}
}
export const toggleComplete=(id)=>{
   return{ 
    type:"tasks/toggleComplete",
    payload: id
}
}
{
    type:"filters/changeFilters"
}