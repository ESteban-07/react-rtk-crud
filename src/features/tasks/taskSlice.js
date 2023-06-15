import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: 'Task 1',
    description: 'Task 1 description',
    completed: false,
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'Task 2 description',
    completed: false,
  },
];

// Aquí voy a definit las operaciones CRUD
export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      // action = {type: "tasks/addTask", payload: {id, description, title}}
      // state = current state (tasks)
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      // in this case action.payload returns a string id
      const taskFound = state.find((task) => task.id === action.payload);

      if (taskFound) {
        // The splice() method changes the contents of an array by removing or replacing existing elements
        state.splice(state.indexOf(taskFound), 1);
      }
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
