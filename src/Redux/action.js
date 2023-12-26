import {ADD_TASK, IS_DONE , DELETE_TASK,EDIT_TASK} from "./actionType";



export function add_task(task) {
    return {
        type: ADD_TASK,
        payload: task
    }
}
export function is_done(task) {
    return {
        type: IS_DONE,
        payload: task
    }
}
export function delete_task (task) {
    return {
        type: DELETE_TASK,
        payload: task
    }
}
export function edit_task (task) {
    return {
        type: EDIT_TASK,
        payload: task
    }
}