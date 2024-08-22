import { createSelector } from "@reduxjs/toolkit"
import { statusFilters } from "./constants"
export const selectTasks= state=> state.tasks.items
export const selectisLoading = state => state.tasks.isLoading
export const selectisError = state => state.tasks.error
export const selectFilters= state=> state.filters.status

export const selectVisibleTasks = createSelector([selectTasks, selectFilters],
    // в дужкаах зазначені селектори від яких залежить цей селектор тобто без них він не виконається(це якісь дані)
    // в пузатій дужці під коментарем пишемо результат того селектору або просто даємо йому назву щоб використовувати
    (tasks, statusFilter) => {
        switch (statusFilter) {
            case statusFilters.active:
            return tasks.filter(task => !task.completed);
            case statusFilters.completed:
            return tasks.filter(task => task.completed);
            default:
            return tasks;
            }
    })



   export const selectTaskCounter = createSelector([selectTasks], (tasks)=>{
        tasks.reduce((acc, task) => {
        if(task.completed) {
            acc.completed += 1
        }else {
            acc.active += 1
        }
        
        return acc},{active: 0, completed: 0})
    })
    



