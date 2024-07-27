import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io'

export const getTasks = createAsyncThunk('tasks/getTasks', async () => {
try {
const res = await axios.get('/tasks')
return res.data
} catch (error) {
console.log(error);
}
})

export const addTask = createAsyncThunk('tasks/addTask', async(text)=>{
    try{
      const newTask =  await axios.post('/tasks', {text} )
      return newTask
    }catch(error){
        console.log(error)
    }
} )

export const deleteTask = createAsyncThunk('tasks/addTask', async()=>{
    try{
      const deleteData =  await axios.delete(`/tasks/${id}` )
      return deleteData
    }catch(error){
        console.log(error)
    }
} )