import {nanoid} from "nanoid"

export const addTask=(text)=>{
    return{

        type:'tasks/addTask',
        payload: {
            id: nanoid(),
             text: text,
              completed: fals 
        }
    //    те що відправляємо як дані для зміни стейт 
    }
}
{
    type:"task/deleteTask"
}
{
    type:"tasks/changeleTask"
}
{
    type:"filters/changeFilters"
}