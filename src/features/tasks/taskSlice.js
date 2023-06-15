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
      // action = {type: "tasks/addTask", payload: {description, title}}
      // state = current state (tasks)
      state.push(action.payload);
    },
  },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
