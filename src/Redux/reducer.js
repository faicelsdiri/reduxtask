import { ADD_TASK, IS_DONE, DELETE_TASK, EDIT_TASK } from "./actionType";

const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case IS_DONE:
      const taskIdToUpdate = action.payload;
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === taskIdToUpdate) {
          return { ...task, isDone: !task.isDone };
        }
        return task;
      });

      return { ...state, tasks: updatedTasks };
    case DELETE_TASK:
      const taskIdToDelete = action.payload;
      const filteredTasks = state.tasks.filter(
        (task) => task.id !== taskIdToDelete
      );
      return { ...state, tasks: filteredTasks };
    case EDIT_TASK:
      const { id, updatedTask } = action.payload;
      const editedTasks = state.tasks.map((task) => {
        if (task.id === id) {
          return { ...task, description: action.payload.taskdescrption };
        }
        return task;
      });

      return { ...state, tasks: editedTasks };
    default:
      return state;
  }
};
export default reducer;
