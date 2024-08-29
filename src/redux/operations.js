import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://goit-task-manager.herokuaoo.com/'

const setAutHeader = token =>{
  axios.defaults.headers.common.Authorization =`Bearer ${toket}`;


};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization="";

};

export const register = createAsyncThunk(
  'auth/register',
  async(newUser, thunkAPI)=>{
    try {
      const res = await axios.post('/users /signup', newUser)
      return res.data
    } catch (error) {
      thunkAPI.rejectWithValue('oops!')
    }
  }
);

export const LogIn = createAsyncThunk(
  'auth/login',
  async(credentials, thunkAPI)=>{

  }
)




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

export const deleteTask = createAsyncThunk('tasks/deleteTask', async(task)=>{
    try{
      const deleteData =  await axios.delete(`/tasks/${task.id}` )
      return deleteData
    }catch(error){
        console.log(error)
    }
} );

export const toggleCompleted = createAsyncThunk('tasks/toggleCompleted', async(task)=>{
  try{
    const toggleTask = await axios.put(`/tasks/${task.id}`, {completed: !task.completed})
    return toggleTask
  }catch(error){
    console.log(error)
}
});